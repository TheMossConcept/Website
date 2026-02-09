# ============================================
# Stage 1: Build Frontend
# ============================================
FROM node:22-alpine AS frontend-builder

WORKDIR /app/frontend

# Copy frontend package files
COPY frontend/package*.json ./

# Install frontend dependencies
RUN npm ci --only=production=false

# Copy frontend source code
COPY frontend/ ./

# TODO: Parmeterise so it also works for production!
# "https://optimistic-recreation-production-8b44.up.railway.app"
ENV VITE_API_URL="https://data-inputter-tq5tz.ondigitalocean.app"
ARG GOOGLE_OAUTH_CLIENT_SECRET
ENV VITE_GOOGLE_OAUTH_CLIENT_SECRET=${GOOGLE_OAUTH_CLIENT_SECRET}

# Build the frontend application
RUN npm run build

# ============================================
# Stage 2: Build Backend
# ============================================
FROM node:22-alpine AS backend-builder

WORKDIR /app

# Copy backend package files
COPY backend/package*.json backend/

# Copy shared types and backend source
COPY backend/ backend/
COPY shared/ shared/

# Install all dependencies (including dev dependencies for build)
RUN cd backend && npm ci

# Build the backend application
RUN cd backend && npm run build

# Install only production dependencies in a separate directory
WORKDIR /app/backend-prod
COPY backend/package*.json ./
RUN npm ci --only=production

# ============================================
# Stage 3: Production Image
# ============================================
FROM node:22-alpine

# Install supervisor and dotenvx
RUN apk add --no-cache \
    curl

RUN curl -sfS https://dotenvx.sh/install.sh | sh

# Copy built frontend from builder stage
COPY --from=frontend-builder /app/frontend/dist /app/frontend/dist

# Create directory for backend application
WORKDIR /app

# Copy built backend, environment files, and production dependencies
# Note: TypeScript compiles shared/ into backend/dist/shared/ due to relative imports
# We need to copy the COMPILED shared directory, not the source files
COPY --from=backend-builder /app/backend/dist/backend/src ./backend/dist/backend/src
COPY --from=backend-builder /app/backend/dist/shared ./backend/dist/shared
COPY --from=backend-builder /app/backend/.env.test ./backend/.env.test
COPY --from=backend-builder /app/backend/.env.production ./backend/.env.production
COPY --from=backend-builder /app/backend-prod/node_modules ./backend/node_modules
COPY backend/package.json ./backend/

# Define run command that injects secrets using dotenvx. The key and secrets file depends on the environment we are runnig in 
ARG ENV
ENV ENVIRONMENT_FILE=./backend/.env.$ENV 

# Expose ports
# Port 80 for backend and frontend (backend serves frontend statically)
EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost:80/ || exit 1
CMD dotenvx run -f $ENVIRONMENT_FILE -- node backend/dist/backend/src/app.js

# The frontend is statically served through the backend

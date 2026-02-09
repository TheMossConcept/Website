# ============================================
# Stage 1: Install all workspace dependencies
# ============================================
FROM node:22-alpine AS deps

WORKDIR /app

# Copy workspace root config and lock file
COPY package.json package-lock.json ./

# Copy workspace package.json files (needed for npm ci to resolve workspaces)
COPY frontend/package.json frontend/
COPY backend/package.json backend/

# Install all dependencies (including dev deps needed for building)
RUN npm ci

# ============================================
# Stage 2: Build Frontend
# ============================================
FROM deps AS frontend-builder

# Copy frontend source
COPY frontend/ frontend/

# Build as static export (produces out/ directory)
ENV NEXT_OUTPUT_MODE=export
RUN npm -w @themossconcept/frontend run build

# ============================================
# Stage 3: Build Backend
# ============================================
FROM deps AS backend-builder

# Copy backend source
COPY backend/ backend/

# Build the backend (tsc compiles src/ -> dist/)
RUN npm -w @themossconcept/backend run build

# ============================================
# Stage 4: Production dependencies only
# ============================================
FROM node:22-alpine AS prod-deps

WORKDIR /app

COPY package.json package-lock.json ./
COPY frontend/package.json frontend/
COPY backend/package.json backend/

# Install only production dependencies (hoisted at root by npm workspaces)
RUN npm ci --omit=dev

# ============================================
# Stage 5: Production Image
# ============================================
FROM node:22-alpine

# Install dotenvx for runtime secret injection
RUN apk add --no-cache curl
RUN curl -sfS https://dotenvx.sh/install.sh | sh

WORKDIR /app

# Copy production node_modules (hoisted at root by npm workspaces)
COPY --from=prod-deps /app/node_modules ./node_modules

# Copy frontend static export
COPY --from=frontend-builder /app/frontend/out ./frontend/dist

# Copy backend compiled code (tsconfig: rootDir=src, outDir=dist)
COPY --from=backend-builder /app/backend/dist ./backend/dist
COPY backend/package.json ./backend/

# Define run command that injects secrets using dotenvx
ARG ENV
ENV ENVIRONMENT_FILE=./backend/.env.$ENV
ENV STATIC_PATH=/app/frontend/dist
ENV NODE_ENV=production
ENV PORT=80

# Expose ports
# Port 80 for backend and frontend (backend serves frontend statically)
EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 \
  CMD wget --quiet --tries=1 --spider https://localhost:80/ || exit 1
CMD node backend/dist/index.js

# The frontend is statically served through the backend

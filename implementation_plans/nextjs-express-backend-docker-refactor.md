# Implementation Plan: Next.js + Express Backend with Docker Support

**Created:** 2026-02-03
**Project:** TheMossConcept/Website
**Author:** Implementation Planning Architect

---

## Overview

This plan details the refactoring of the existing Next.js 14 frontend project into a monorepo structure with:
1. A dedicated `frontend/` folder containing the existing Next.js application
2. A new `backend/` folder with a Node.js/TypeScript/Express server
3. Docker configuration for both development (docker-compose) and production (multi-stage Dockerfile)
4. Production setup where Express serves the statically exported Next.js build

The approach preserves all existing functionality while enabling future API development through the Express backend.

---

## Prerequisites

- [ ] Node.js 18+ installed locally (for development without Docker)
- [ ] Docker and Docker Compose installed (for containerized development)
- [ ] Yarn package manager (already in use)

### Dependencies to Install

**Backend (new):**
```
express @types/express
cors @types/cors
helmet
compression @types/compression
dotenv
typescript
ts-node ts-node-dev
@types/node
```

**Root workspace (new):**
```
concurrently (for running frontend + backend simultaneously in dev)
```

---

## Documentation to Consult

| Documentation | Purpose | Priority |
|--------------|---------|----------|
| Express.js Official Docs | Server setup, middleware configuration, static file serving | High |
| Next.js Static Export | Understanding `output: 'export'` for production build | High |
| Docker Multi-stage Builds | Optimizing production container size | High |
| Docker Compose v2 | Development environment orchestration | High |
| TypeScript + Node.js | Backend TypeScript configuration | Medium |
| Yarn Workspaces | Monorepo dependency management | Medium |

---

## Current Project Analysis

### Existing Structure
```
/home/niklas/code/TheMossConcept/Website/
├── components/           # React UI components
├── frontpage/           # Frontpage-specific components
├── pages/               # Next.js pages (index, concept, partnership, purpose)
├── public/              # Static assets (fonts, images, videos)
├── subpages/            # Subpage components
├── types/               # TypeScript type definitions
├── utilities/           # Shared utilities and hooks
├── global.css           # Global styles
├── next.config.mjs      # Next.js configuration
├── tsconfig.json        # TypeScript configuration
├── package.json         # Dependencies and scripts
├── yarn.lock            # Yarn lockfile
├── .eslintrc.json       # ESLint configuration
└── .prettierrc          # Prettier configuration
```

### Key Observations
1. Uses Next.js 14 with pages router (not app router)
2. MUI (Material-UI) v5 for styling with Emotion
3. TypeScript with strict mode enabled
4. Uses `serve` package (currently unused, can be removed)
5. Has image optimization enabled (`unoptimized: false`)
6. No existing API routes

---

## Target Project Structure

```
/home/niklas/code/TheMossConcept/Website/
├── frontend/                    # Existing Next.js app (moved here)
│   ├── components/
│   ├── frontpage/
│   ├── pages/
│   ├── public/
│   ├── subpages/
│   ├── types/
│   ├── utilities/
│   ├── global.css
│   ├── next.config.mjs          # Modified for static export
│   ├── tsconfig.json
│   ├── package.json             # Frontend-specific deps
│   ├── .eslintrc.json
│   └── .prettierrc
│
├── backend/                     # New Express server
│   ├── src/
│   │   ├── index.ts             # Entry point
│   │   ├── app.ts               # Express app setup
│   │   ├── config/
│   │   │   └── index.ts         # Configuration loader
│   │   ├── middleware/
│   │   │   ├── errorHandler.ts
│   │   │   └── requestLogger.ts
│   │   ├── routes/
│   │   │   ├── index.ts         # Route aggregator
│   │   │   ├── health.ts        # Health check endpoint
│   │   │   └── api.ts           # Future API routes placeholder
│   │   └── types/
│   │       └── index.ts
│   ├── dist/                    # Compiled output (gitignored)
│   ├── tsconfig.json
│   ├── package.json
│   ├── .eslintrc.json
│   └── nodemon.json
│
├── docker/                      # Docker configurations
│   └── Dockerfile.prod          # Production multi-stage build
│
├── docker-compose.yml           # Development orchestration
├── docker-compose.prod.yml      # Production compose (optional)
├── .dockerignore
├── .env.example                 # Environment variable template
├── .gitignore                   # Updated for monorepo
├── package.json                 # Root workspace package.json
├── yarn.lock                    # Shared lockfile
└── README.md                    # Updated documentation
```

---

## Relevant Files

### Files to Modify

| File Path | Purpose of Changes |
|-----------|-------------------|
| `/home/niklas/code/TheMossConcept/Website/.gitignore` | Add backend dist/, Docker artifacts, env files |
| `/home/niklas/code/TheMossConcept/Website/package.json` | Convert to workspace root, add orchestration scripts |

### Files to Move (Existing -> Frontend)

| Current Path | New Path |
|-------------|----------|
| `components/` | `frontend/components/` |
| `frontpage/` | `frontend/frontpage/` |
| `pages/` | `frontend/pages/` |
| `public/` | `frontend/public/` |
| `subpages/` | `frontend/subpages/` |
| `types/` | `frontend/types/` |
| `utilities/` | `frontend/utilities/` |
| `global.css` | `frontend/global.css` |
| `next.config.mjs` | `frontend/next.config.mjs` |
| `tsconfig.json` | `frontend/tsconfig.json` |
| `.eslintrc.json` | `frontend/.eslintrc.json` |
| `.prettierrc` | `frontend/.prettierrc` |
| `next-env.d.ts` | `frontend/next-env.d.ts` |

### Files to Create

| File Path | Purpose |
|-----------|--------|
| `frontend/package.json` | Frontend-specific dependencies |
| `frontend/next.config.mjs` | Modified Next.js config with static export option |
| `backend/package.json` | Backend dependencies |
| `backend/tsconfig.json` | Backend TypeScript configuration |
| `backend/src/index.ts` | Server entry point |
| `backend/src/app.ts` | Express application setup |
| `backend/src/config/index.ts` | Environment configuration |
| `backend/src/middleware/errorHandler.ts` | Global error handler |
| `backend/src/middleware/requestLogger.ts` | Request logging middleware |
| `backend/src/routes/index.ts` | Route aggregator |
| `backend/src/routes/health.ts` | Health check endpoint |
| `backend/src/routes/api.ts` | API routes placeholder |
| `backend/src/types/index.ts` | Shared TypeScript types |
| `backend/.eslintrc.json` | Backend ESLint config |
| `backend/nodemon.json` | Nodemon configuration |
| `docker-compose.yml` | Development orchestration |
| `docker/Dockerfile.prod` | Production multi-stage build |
| `.dockerignore` | Docker ignore patterns |
| `.env.example` | Environment template |
| `package.json` (root) | Workspace configuration |

---

## Tools to Use

- [ ] **Read**: Read existing configuration files for reference
- [ ] **Write**: Create new configuration files
- [ ] **Edit**: Modify existing files (gitignore, etc.)
- [ ] **Bash**: Execute yarn commands, create directories, move files
- [ ] **Glob**: Find files during refactoring
- [ ] **docs MCP server**: Query Express.js, Docker, and Next.js documentation

---

## Implementation Steps

### Phase 1: Create Directory Structure and Move Frontend

**Step 1.1: Create the frontend directory and move all existing code**

```bash
# Create frontend directory
mkdir -p /home/niklas/code/TheMossConcept/Website/frontend

# Move all frontend-related directories
mv /home/niklas/code/TheMossConcept/Website/components /home/niklas/code/TheMossConcept/Website/frontend/
mv /home/niklas/code/TheMossConcept/Website/frontpage /home/niklas/code/TheMossConcept/Website/frontend/
mv /home/niklas/code/TheMossConcept/Website/pages /home/niklas/code/TheMossConcept/Website/frontend/
mv /home/niklas/code/TheMossConcept/Website/public /home/niklas/code/TheMossConcept/Website/frontend/
mv /home/niklas/code/TheMossConcept/Website/subpages /home/niklas/code/TheMossConcept/Website/frontend/
mv /home/niklas/code/TheMossConcept/Website/types /home/niklas/code/TheMossConcept/Website/frontend/
mv /home/niklas/code/TheMossConcept/Website/utilities /home/niklas/code/TheMossConcept/Website/frontend/

# Move frontend configuration files
mv /home/niklas/code/TheMossConcept/Website/global.css /home/niklas/code/TheMossConcept/Website/frontend/
mv /home/niklas/code/TheMossConcept/Website/next.config.mjs /home/niklas/code/TheMossConcept/Website/frontend/
mv /home/niklas/code/TheMossConcept/Website/tsconfig.json /home/niklas/code/TheMossConcept/Website/frontend/
mv /home/niklas/code/TheMossConcept/Website/.eslintrc.json /home/niklas/code/TheMossConcept/Website/frontend/
mv /home/niklas/code/TheMossConcept/Website/.prettierrc /home/niklas/code/TheMossConcept/Website/frontend/
mv /home/niklas/code/TheMossConcept/Website/next-env.d.ts /home/niklas/code/TheMossConcept/Website/frontend/
```

**Validation:** Run `ls -la frontend/` to verify all directories were moved.

**Step 1.2: Create frontend/package.json**

Create the frontend-specific package.json with all current dependencies:

```json
{
  "name": "@themossconcept/frontend",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@emotion/react": "^11.9.0",
    "@emotion/styled": "^11.8.1",
    "@mui/icons-material": "^5.8.0",
    "@mui/material": "^5.6.0",
    "@testing-library/jest-dom": "^5.11.4",
    "@testing-library/react": "^11.1.0",
    "@testing-library/user-event": "^12.1.10",
    "@testing-library/dom": "7.21.4",
    "@types/jest": "^26.0.15",
    "@types/mui-image": "1.0.1",
    "@types/node": "^12.0.0",
    "@types/react": "18.0.28",
    "@types/react-transition-group": "^4.4.5",
    "axios": "^1.3.4",
    "lodash": "^4.17.21",
    "next": "^14",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "react-ga4": "^2.1.0",
    "react-transition-group": "^4.4.5",
    "sharp": "^0.31.3",
    "snapsvg": "^0.5.1",
    "typescript": "^4.1.2",
    "web-vitals": "^1.0.1"
  },
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "build:export": "next build",
    "start": "next start",
    "lint": "eslint .",
    "lint:fix": "eslint --fix",
    "format": "prettier --write './**/*.{js,jsx,ts,tsx,css,md,json}' --config ./.prettierrc"
  },
  "devDependencies": {
    "@svgr/webpack": "^6.2.1",
    "@types/lodash": "^4.14.192",
    "@typescript-eslint/eslint-plugin": "^5.23.0",
    "@typescript-eslint/parser": "^5.23.0",
    "eslint": "^7.32.0",
    "eslint-config-prettier": "^8.5.0",
    "eslint-plugin-prettier": "^4.0.0",
    "eslint-plugin-react": "^7.29.4",
    "prettier": "2.8.3"
  }
}
```

**Step 1.3: Update frontend/next.config.mjs for static export support**

```javascript
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  // Enable static export for production builds served by Express
  // Remove this line for development with next dev
  output: process.env.NEXT_OUTPUT_MODE === 'export' ? 'export' : undefined,

  images: {
    // When using static export, images must be unoptimized
    unoptimized: process.env.NEXT_OUTPUT_MODE === 'export' ? true : false
  },

  // Ensure trailing slashes for static file serving
  trailingSlash: process.env.NEXT_OUTPUT_MODE === 'export' ? true : false,
};

export default nextConfig;
```

**Step 1.4: Update frontend/tsconfig.json**

Update the include paths since files are now in the frontend directory:

```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noFallthroughCasesInSwitch": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "preserve",
    "incremental": true,
    "baseUrl": ".",
    "paths": {
      "@components/*": ["components/*"],
      "@utilities/*": ["utilities/*"],
      "@types/*": ["types/*"]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx"
  ],
  "exclude": ["node_modules", "out", ".next"]
}
```

**Validation:**
- Run `cd frontend && yarn install && yarn build` to verify the frontend still builds
- Run `yarn dev` and verify the site works at localhost:3000

---

### Phase 2: Create Backend Infrastructure

**Step 2.1: Create backend directory structure**

```bash
mkdir -p /home/niklas/code/TheMossConcept/Website/backend/src/{config,middleware,routes,types}
```

**Step 2.2: Create backend/package.json**

```json
{
  "name": "@themossconcept/backend",
  "version": "0.1.0",
  "private": true,
  "main": "dist/index.js",
  "scripts": {
    "dev": "ts-node-dev --respawn --transpile-only src/index.ts",
    "build": "tsc",
    "start": "node dist/index.js",
    "start:prod": "NODE_ENV=production node dist/index.js",
    "lint": "eslint src --ext .ts",
    "lint:fix": "eslint src --ext .ts --fix",
    "typecheck": "tsc --noEmit"
  },
  "dependencies": {
    "compression": "^1.7.4",
    "cors": "^2.8.5",
    "dotenv": "^16.3.1",
    "express": "^4.18.2",
    "helmet": "^7.1.0"
  },
  "devDependencies": {
    "@types/compression": "^1.7.5",
    "@types/cors": "^2.8.17",
    "@types/express": "^4.17.21",
    "@types/node": "^20.10.0",
    "@typescript-eslint/eslint-plugin": "^5.62.0",
    "@typescript-eslint/parser": "^5.62.0",
    "eslint": "^8.56.0",
    "ts-node": "^10.9.2",
    "ts-node-dev": "^2.0.0",
    "typescript": "^5.3.0"
  }
}
```

**Step 2.3: Create backend/tsconfig.json**

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "lib": ["ES2020"],
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
    "declaration": true,
    "declarationMap": true,
    "sourceMap": true,
    "moduleResolution": "node",
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

**Step 2.4: Create backend/.eslintrc.json**

```json
{
  "env": {
    "node": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": ["@typescript-eslint"],
  "rules": {
    "@typescript-eslint/explicit-function-return-type": "warn",
    "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "^_" }]
  }
}
```

**Step 2.5: Create backend/src/config/index.ts**

```typescript
import dotenv from 'dotenv';
import path from 'path';

// Load environment variables
dotenv.config({ path: path.resolve(__dirname, '../../../.env') });

export interface Config {
  port: number;
  nodeEnv: string;
  isProduction: boolean;
  isDevelopment: boolean;
  staticPath: string;
  corsOrigins: string[];
}

const config: Config = {
  port: parseInt(process.env.PORT || '3001', 10),
  nodeEnv: process.env.NODE_ENV || 'development',
  isProduction: process.env.NODE_ENV === 'production',
  isDevelopment: process.env.NODE_ENV !== 'production',
  staticPath: process.env.STATIC_PATH || path.resolve(__dirname, '../../../frontend/out'),
  corsOrigins: process.env.CORS_ORIGINS?.split(',') || ['http://localhost:3000'],
};

export default config;
```

**Step 2.6: Create backend/src/types/index.ts**

```typescript
import { Request, Response, NextFunction } from 'express';

export interface ApiError extends Error {
  statusCode?: number;
  isOperational?: boolean;
}

export type AsyncHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<void>;

export interface HealthResponse {
  status: 'ok' | 'error';
  timestamp: string;
  uptime: number;
  environment: string;
}
```

**Step 2.7: Create backend/src/middleware/errorHandler.ts**

```typescript
import { Request, Response, NextFunction } from 'express';
import { ApiError } from '../types';
import config from '../config';

export function errorHandler(
  err: ApiError,
  _req: Request,
  res: Response,
  _next: NextFunction
): void {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  console.error(`[Error] ${statusCode}: ${message}`);
  if (config.isDevelopment && err.stack) {
    console.error(err.stack);
  }

  res.status(statusCode).json({
    error: {
      message,
      ...(config.isDevelopment && { stack: err.stack }),
    },
  });
}

export function notFoundHandler(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  // In production, let static file serving handle 404s for frontend routes
  if (config.isProduction) {
    next();
    return;
  }

  const error: ApiError = new Error(`Not Found: ${req.originalUrl}`);
  error.statusCode = 404;
  next(error);
}
```

**Step 2.8: Create backend/src/middleware/requestLogger.ts**

```typescript
import { Request, Response, NextFunction } from 'express';

export function requestLogger(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const start = Date.now();

  res.on('finish', () => {
    const duration = Date.now() - start;
    const logMessage = `[${new Date().toISOString()}] ${req.method} ${req.originalUrl} ${res.statusCode} - ${duration}ms`;
    console.log(logMessage);
  });

  next();
}
```

**Step 2.9: Create backend/src/routes/health.ts**

```typescript
import { Router, Request, Response } from 'express';
import config from '../config';
import { HealthResponse } from '../types';

const router = Router();

router.get('/health', (_req: Request, res: Response): void => {
  const healthResponse: HealthResponse = {
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: config.nodeEnv,
  };

  res.json(healthResponse);
});

router.get('/ready', (_req: Request, res: Response): void => {
  // Add any readiness checks here (database connections, etc.)
  res.json({ ready: true });
});

export default router;
```

**Step 2.10: Create backend/src/routes/api.ts**

```typescript
import { Router, Request, Response } from 'express';

const router = Router();

// Placeholder for future API routes
router.get('/', (_req: Request, res: Response): void => {
  res.json({
    message: 'TheMossConcept API',
    version: '1.0.0',
    endpoints: {
      health: '/api/health',
      ready: '/api/ready',
    },
  });
});

// Example: Future contact form endpoint
// router.post('/contact', async (req, res) => { ... });

export default router;
```

**Step 2.11: Create backend/src/routes/index.ts**

```typescript
import { Router } from 'express';
import healthRoutes from './health';
import apiRoutes from './api';

const router = Router();

// Mount route modules
router.use('/', healthRoutes);
router.use('/', apiRoutes);

export default router;
```

**Step 2.12: Create backend/src/app.ts**

```typescript
import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import path from 'path';

import config from './config';
import routes from './routes';
import { errorHandler, notFoundHandler } from './middleware/errorHandler';
import { requestLogger } from './middleware/requestLogger';

export function createApp(): Application {
  const app = express();

  // Security middleware
  app.use(helmet({
    contentSecurityPolicy: config.isProduction ? undefined : false,
  }));

  // CORS configuration
  app.use(cors({
    origin: config.isProduction ? true : config.corsOrigins,
    credentials: true,
  }));

  // Compression
  app.use(compression());

  // Body parsing
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Request logging
  app.use(requestLogger);

  // API routes (mounted under /api)
  app.use('/api', routes);

  // Production: Serve static files from Next.js export
  if (config.isProduction) {
    console.log(`Serving static files from: ${config.staticPath}`);

    // Serve static assets
    app.use(express.static(config.staticPath, {
      maxAge: '1y',
      etag: true,
    }));

    // Handle client-side routing - serve index.html for all non-API routes
    app.get('*', (req, res, next) => {
      // Skip API routes
      if (req.path.startsWith('/api')) {
        return next();
      }

      // Try to serve the exact file first (for routes like /concept)
      const filePath = path.join(config.staticPath, req.path, 'index.html');
      res.sendFile(filePath, (err) => {
        if (err) {
          // Fallback to root index.html
          res.sendFile(path.join(config.staticPath, 'index.html'));
        }
      });
    });
  }

  // Error handling
  app.use(notFoundHandler);
  app.use(errorHandler);

  return app;
}
```

**Step 2.13: Create backend/src/index.ts**

```typescript
import { createApp } from './app';
import config from './config';

const app = createApp();

const server = app.listen(config.port, () => {
  console.log(`
========================================
  TheMossConcept Backend Server
========================================
  Environment: ${config.nodeEnv}
  Port: ${config.port}
  Static Path: ${config.staticPath}
========================================
  `);
});

// Graceful shutdown
const shutdown = (signal: string): void => {
  console.log(`\n${signal} received. Shutting down gracefully...`);
  server.close(() => {
    console.log('Server closed.');
    process.exit(0);
  });

  // Force close after 10 seconds
  setTimeout(() => {
    console.error('Forcing shutdown...');
    process.exit(1);
  }, 10000);
};

process.on('SIGTERM', () => shutdown('SIGTERM'));
process.on('SIGINT', () => shutdown('SIGINT'));
```

**Validation:**
- Run `cd backend && yarn install && yarn build` to verify compilation
- Run `yarn dev` and verify server starts on port 3001
- Test health endpoint: `curl http://localhost:3001/api/health`

---

### Phase 3: Create Root Workspace Configuration

**Step 3.1: Create root package.json (workspace)**

Replace the existing root package.json:

```json
{
  "name": "themossconcept-website",
  "version": "0.1.0",
  "private": true,
  "workspaces": [
    "frontend",
    "backend"
  ],
  "scripts": {
    "dev": "concurrently -n \"frontend,backend\" -c \"cyan,green\" \"yarn dev:frontend\" \"yarn dev:backend\"",
    "dev:frontend": "yarn workspace @themossconcept/frontend dev",
    "dev:backend": "yarn workspace @themossconcept/backend dev",
    "build": "yarn build:frontend && yarn build:backend",
    "build:frontend": "yarn workspace @themossconcept/frontend build",
    "build:frontend:export": "NEXT_OUTPUT_MODE=export yarn workspace @themossconcept/frontend build",
    "build:backend": "yarn workspace @themossconcept/backend build",
    "start": "yarn workspace @themossconcept/backend start:prod",
    "lint": "yarn workspace @themossconcept/frontend lint && yarn workspace @themossconcept/backend lint",
    "lint:fix": "yarn workspace @themossconcept/frontend lint:fix && yarn workspace @themossconcept/backend lint:fix",
    "typecheck": "yarn workspace @themossconcept/frontend tsc --noEmit && yarn workspace @themossconcept/backend typecheck",
    "docker:dev": "docker-compose up",
    "docker:dev:build": "docker-compose up --build",
    "docker:prod:build": "docker build -f docker/Dockerfile.prod -t themossconcept-website .",
    "docker:prod:run": "docker run -p 3001:3001 themossconcept-website"
  },
  "devDependencies": {
    "concurrently": "^8.2.2"
  }
}
```

**Step 3.2: Create .env.example**

```env
# Server Configuration
NODE_ENV=development
PORT=3001

# Frontend URL (for CORS in development)
CORS_ORIGINS=http://localhost:3000

# Static files path (production only, relative to backend)
STATIC_PATH=../frontend/out

# Add your future environment variables below:
# DATABASE_URL=
# API_KEY=
```

**Step 3.3: Update .gitignore**

```gitignore
# Dependencies
node_modules/
.pnp
.pnp.js

# Testing
coverage/

# Production builds
/build
/frontend/.next
/frontend/out
/backend/dist

# Environment files
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Debug logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# IDE
.idea/
.vscode/
*.swp
*.swo

# OS files
.DS_Store
Thumbs.db

# Docker
docker-compose.override.yml

# Misc
*.log
```

**Validation:** Run `yarn install` from root to set up workspaces.

---

### Phase 4: Docker Configuration

**Step 4.1: Create docker/ directory**

```bash
mkdir -p /home/niklas/code/TheMossConcept/Website/docker
```

**Step 4.2: Create docker-compose.yml (development)**

```yaml
version: '3.8'

services:
  frontend:
    build:
      context: .
      dockerfile: docker/Dockerfile.dev.frontend
    ports:
      - "3000:3000"
    volumes:
      - ./frontend:/app/frontend
      - /app/frontend/node_modules
      - /app/frontend/.next
    environment:
      - NODE_ENV=development
      - WATCHPACK_POLLING=true
    command: yarn dev

  backend:
    build:
      context: .
      dockerfile: docker/Dockerfile.dev.backend
    ports:
      - "3001:3001"
    volumes:
      - ./backend/src:/app/backend/src
      - /app/backend/node_modules
    environment:
      - NODE_ENV=development
      - PORT=3001
      - CORS_ORIGINS=http://localhost:3000
    depends_on:
      - frontend
    command: yarn dev

networks:
  default:
    name: themossconcept-network
```

**Step 4.3: Create docker/Dockerfile.dev.frontend**

```dockerfile
FROM node:18-alpine

WORKDIR /app

# Install dependencies
COPY package.json yarn.lock ./
COPY frontend/package.json ./frontend/

RUN yarn install --frozen-lockfile

# Copy frontend source
COPY frontend ./frontend

WORKDIR /app/frontend

EXPOSE 3000

CMD ["yarn", "dev"]
```

**Step 4.4: Create docker/Dockerfile.dev.backend**

```dockerfile
FROM node:18-alpine

WORKDIR /app

# Install dependencies
COPY package.json yarn.lock ./
COPY backend/package.json ./backend/

RUN yarn install --frozen-lockfile

# Copy backend source
COPY backend ./backend

WORKDIR /app/backend

EXPOSE 3001

CMD ["yarn", "dev"]
```

**Step 4.5: Create docker/Dockerfile.prod (multi-stage production)**

```dockerfile
# ===========================================
# Stage 1: Base image with dependencies
# ===========================================
FROM node:18-alpine AS base
WORKDIR /app
RUN apk add --no-cache libc6-compat

# ===========================================
# Stage 2: Install dependencies
# ===========================================
FROM base AS deps

# Copy workspace files
COPY package.json yarn.lock ./
COPY frontend/package.json ./frontend/
COPY backend/package.json ./backend/

# Install all dependencies
RUN yarn install --frozen-lockfile

# ===========================================
# Stage 3: Build Frontend (Static Export)
# ===========================================
FROM base AS frontend-builder

COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/frontend/node_modules ./frontend/node_modules

# Copy frontend source
COPY frontend ./frontend
COPY package.json ./

# Build frontend with static export
WORKDIR /app/frontend
ENV NEXT_OUTPUT_MODE=export
ENV NEXT_TELEMETRY_DISABLED=1
RUN yarn build

# ===========================================
# Stage 4: Build Backend
# ===========================================
FROM base AS backend-builder

COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/backend/node_modules ./backend/node_modules

# Copy backend source
COPY backend ./backend

# Build backend
WORKDIR /app/backend
RUN yarn build

# ===========================================
# Stage 5: Production Runtime
# ===========================================
FROM node:18-alpine AS runner

WORKDIR /app

# Don't run as root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 expressjs

# Copy built assets
COPY --from=frontend-builder --chown=expressjs:nodejs /app/frontend/out ./frontend/out
COPY --from=backend-builder --chown=expressjs:nodejs /app/backend/dist ./backend/dist
COPY --from=backend-builder --chown=expressjs:nodejs /app/backend/package.json ./backend/

# Install production dependencies only
WORKDIR /app/backend
RUN yarn install --production --frozen-lockfile

# Set environment
ENV NODE_ENV=production
ENV PORT=3001
ENV STATIC_PATH=/app/frontend/out

USER expressjs

EXPOSE 3001

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:3001/api/health || exit 1

CMD ["node", "dist/index.js"]
```

**Step 4.6: Create .dockerignore**

```dockerignore
# Git
.git
.gitignore

# Dependencies (will be installed in container)
node_modules
frontend/node_modules
backend/node_modules

# Build artifacts
frontend/.next
frontend/out
backend/dist

# Development files
.env
.env.local
.env.*.local
docker-compose.override.yml

# IDE
.idea
.vscode
*.swp
*.swo

# Documentation
*.md
!README.md

# Logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Testing
coverage
.nyc_output

# OS files
.DS_Store
Thumbs.db

# Implementation plans (not needed in container)
implementation_plans
```

**Validation:**
- Run `yarn docker:dev:build` to verify development containers build
- Run `yarn docker:prod:build` to verify production image builds
- Run `yarn docker:prod:run` and test at http://localhost:3001

---

### Phase 5: Update Frontend for API Integration (Optional)

**Step 5.1: Create frontend API utility (for future use)**

Create `frontend/utilities/api.ts`:

```typescript
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

export const apiClient: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for logging
apiClient.interceptors.request.use(
  (config) => {
    console.log(`[API] ${config.method?.toUpperCase()} ${config.url}`);
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor for error handling
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('[API Error]', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

// Typed API methods
export const api = {
  get: <T>(url: string, config?: AxiosRequestConfig) =>
    apiClient.get<T>(url, config).then(res => res.data),

  post: <T>(url: string, data?: unknown, config?: AxiosRequestConfig) =>
    apiClient.post<T>(url, data, config).then(res => res.data),

  put: <T>(url: string, data?: unknown, config?: AxiosRequestConfig) =>
    apiClient.put<T>(url, data, config).then(res => res.data),

  delete: <T>(url: string, config?: AxiosRequestConfig) =>
    apiClient.delete<T>(url, config).then(res => res.data),
};

export default api;
```

**Step 5.2: Add environment variable support to frontend**

Update `frontend/next.config.mjs` to include environment variables:

```javascript
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: process.env.NEXT_OUTPUT_MODE === 'export' ? 'export' : undefined,

  images: {
    unoptimized: process.env.NEXT_OUTPUT_MODE === 'export' ? true : false
  },

  trailingSlash: process.env.NEXT_OUTPUT_MODE === 'export' ? true : false,

  // Expose environment variables to the browser
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api',
  },
};

export default nextConfig;
```

---

### Phase 6: Final Cleanup and Documentation

**Step 6.1: Remove unused dependencies from old root package.json**

The old root package.json should be completely replaced by the workspace package.json created in Phase 3.

**Step 6.2: Delete yarn.lock and regenerate**

```bash
rm /home/niklas/code/TheMossConcept/Website/yarn.lock
cd /home/niklas/code/TheMossConcept/Website && yarn install
```

**Step 6.3: Update README.md**

Update the README to document the new monorepo structure and commands.

---

## Testing Strategy

### Unit Tests
- [ ] Backend route tests for health endpoints
- [ ] Backend middleware tests for error handling

### Integration Tests
- [ ] Frontend builds successfully with `yarn build:frontend`
- [ ] Frontend exports successfully with `yarn build:frontend:export`
- [ ] Backend builds successfully with `yarn build:backend`
- [ ] Backend serves static files correctly in production mode

### Manual Testing Steps
1. **Development Mode:**
   - Run `yarn dev` from root
   - Verify frontend at http://localhost:3000
   - Verify backend API at http://localhost:3001/api/health
   - Navigate all frontend pages: /, /concept, /partnership, /purpose

2. **Production Build (Local):**
   - Run `yarn build:frontend:export && yarn build:backend`
   - Run `NODE_ENV=production yarn start`
   - Verify all pages served correctly at http://localhost:3001

3. **Docker Development:**
   - Run `yarn docker:dev:build`
   - Verify containers start and communicate

4. **Docker Production:**
   - Run `yarn docker:prod:build`
   - Run `yarn docker:prod:run`
   - Verify production container serves correctly at http://localhost:3001

---

## Validation Checklist

- [ ] All frontend pages render correctly after restructuring
- [ ] `yarn dev` runs both frontend and backend concurrently
- [ ] `yarn build` succeeds for both frontend and backend
- [ ] Backend serves static export in production mode
- [ ] Docker development containers run correctly
- [ ] Docker production container builds and runs
- [ ] Health check endpoint returns expected response
- [ ] No TypeScript errors in either workspace
- [ ] ESLint passes for both workspaces
- [ ] Git history preserved (no accidental deletions)

---

## Potential Challenges & Mitigations

| Challenge | Mitigation Strategy |
|-----------|--------------------|
| Next.js image optimization incompatible with static export | Set `images.unoptimized: true` when `NEXT_OUTPUT_MODE=export` |
| Yarn workspaces hoisting issues | Use `nohoist` in package.json if specific packages cause issues |
| Docker build context too large | Comprehensive `.dockerignore` to exclude unnecessary files |
| CORS issues in development | Configure Express CORS to allow frontend origin |
| Static file routing for SPA | Express fallback to serve index.html for client routes |
| Hot reload not working in Docker | Use `WATCHPACK_POLLING=true` and proper volume mounts |
| TypeScript path aliases not resolving | Configure paths in both tsconfig.json files |
| Large production image size | Multi-stage build to only include production dependencies |

---

## Migration Sequence (Step-by-Step Commands)

Execute these commands in order to perform the migration:

```bash
# 1. Create frontend directory and move files
cd /home/niklas/code/TheMossConcept/Website
mkdir -p frontend
mv components frontpage pages public subpages types utilities frontend/
mv global.css next.config.mjs tsconfig.json .eslintrc.json .prettierrc next-env.d.ts frontend/

# 2. Create backend structure
mkdir -p backend/src/{config,middleware,routes,types}

# 3. Create docker directory
mkdir -p docker

# 4. Create all new files (using Write tool for each file listed above)

# 5. Install dependencies
yarn install

# 6. Verify frontend still works
cd frontend && yarn build && cd ..

# 7. Verify backend compiles
cd backend && yarn build && cd ..

# 8. Test development mode
yarn dev

# 9. Test production build
yarn build:frontend:export && yarn build:backend
NODE_ENV=production yarn start

# 10. Test Docker
yarn docker:prod:build
yarn docker:prod:run
```

---

## Additional Notes

### Digital Ocean Deployment Considerations

Since the current deployment uses Digital Ocean with yarn (per commit message), the production Dockerfile is designed to:
1. Use yarn for all package management
2. Output a single container that serves both API and static files
3. Include health checks for Digital Ocean App Platform

### Future Enhancements

1. **Database Integration**: Add PostgreSQL/MongoDB service to docker-compose
2. **API Routes**: Expand backend/src/routes/api.ts with actual endpoints
3. **Authentication**: Add JWT or session-based auth middleware
4. **Caching**: Add Redis for API response caching
5. **Logging**: Integrate structured logging (Winston, Pino)
6. **Monitoring**: Add Prometheus metrics endpoint

### Important File Paths Summary

| Purpose | Path |
|---------|------|
| Root package.json | `/home/niklas/code/TheMossConcept/Website/package.json` |
| Frontend package.json | `/home/niklas/code/TheMossConcept/Website/frontend/package.json` |
| Backend package.json | `/home/niklas/code/TheMossConcept/Website/backend/package.json` |
| Backend entry point | `/home/niklas/code/TheMossConcept/Website/backend/src/index.ts` |
| Production Dockerfile | `/home/niklas/code/TheMossConcept/Website/docker/Dockerfile.prod` |
| Development docker-compose | `/home/niklas/code/TheMossConcept/Website/docker-compose.yml` |
| Environment template | `/home/niklas/code/TheMossConcept/Website/.env.example` |

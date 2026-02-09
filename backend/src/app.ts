import express, { Application, RequestHandler } from 'express';
import cors from 'cors';
import compression from 'compression';
import path from 'path';

import config from './config';
import routes from './routes';
import { errorHandler, notFoundHandler } from './middleware/errorHandler';
import { requestLogger } from './middleware/requestLogger';

export function createApp(): Application {
  const app = express();

  // CORS configuration - allow all origins
  app.use(cors());

  // Compression
  app.use(compression() as unknown as RequestHandler);

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

    // Serve Next.js hashed static assets with long-term caching
    app.use('/', express.static(path.join(config.staticPath, '_next/static'), {
      maxAge: '1y',
      immutable: true,
    }));

    // Serve remaining static assets with etag-based caching
    app.use(express.static(config.staticPath, {
      etag: true,
      lastModified: true,
      maxAge: 0,
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
          // Fallback to root index.html for client-side routing
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

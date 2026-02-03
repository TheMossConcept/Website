import express, { Application, RequestHandler } from 'express';
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

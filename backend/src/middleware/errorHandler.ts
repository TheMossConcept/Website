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

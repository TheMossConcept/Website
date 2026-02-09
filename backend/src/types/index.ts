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

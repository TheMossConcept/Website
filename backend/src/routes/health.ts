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

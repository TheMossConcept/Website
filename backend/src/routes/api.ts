import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (_req: Request, res: Response): void => {
  res.json({
    message: 'TheMossConcept API',
    version: '1.0.0',
    endpoints: {
      health: '/api/health',
      ready: '/api/ready',
      contact: '/api/contact (POST)',
    },
  });
});

export default router;

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

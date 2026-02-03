import { Router } from 'express';
import healthRoutes from './health';
import apiRoutes from './api';

const router = Router();

// Mount route modules
router.use('/', healthRoutes);
router.use('/', apiRoutes);

export default router;

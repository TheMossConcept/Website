import { Router } from 'express';
import healthRoutes from './health';
import apiRoutes from './api';
import contactRoutes from './contact';

const router = Router();

// Mount route modules
router.use('/', healthRoutes);
router.use('/', apiRoutes);
router.use('/', contactRoutes);

export default router;

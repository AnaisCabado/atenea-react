import { Router } from "express";
import userApiRoutes from './userApiRoutes.js';
import publicationApiRoutes from './publicationApiRoutes.js';
import eventApiRoutes from './eventApiRoutes.js';
import postApiRoutes from './postApiRoutes.js';

const router = Router();

// rutas de api
router.use('/users', userApiRoutes);
router.use('/publications', publicationApiRoutes);
router.use('/events', eventApiRoutes);
router.use('/posts', postApiRoutes);

export default router;
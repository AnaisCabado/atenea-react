import { Router } from "express";
import postApiController from "../../controllers/post/postApiController.js";

const router = Router();

// rutas publicas

// rutas protegidas
router.get('/', postApiController.getAll);

export default router;
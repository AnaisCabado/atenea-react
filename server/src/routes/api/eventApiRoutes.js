import { Router } from "express";
import eventApiController from "../../controllers/event/eventApiController.js";

const router = Router();

// rutas publicas

// rutas protegidas
router.get('/', eventApiController.getAll);
router.post('/:date', eventApiController.getByDate);

export default router;
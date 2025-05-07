import { Router } from "express";
import publicationApiController from "../../controllers/publication/publicationApiController.js";

const router = Router();

// rutas publicas

// rutas protegidas
router.get('/', publicationApiController.getAll);
router.post('/create', publicationApiController.create);

router.get('/username/:username', publicationApiController.getByUser);

router.get('/:id', publicationApiController.getByID);
router.put('/:id/edit', publicationApiController.edit);
router.delete("/:id/delete", publicationApiController.remove);

export default router;
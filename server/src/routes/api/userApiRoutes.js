import { Router } from "express";
import userApiController from "../../controllers/user/userApiController.js";
import { isLoggedInAPI } from "../../middleware/authMiddleware.js";


const router = Router();

router.get("/login",userApiController.login);

router.get('/', isLoggedInAPI,userApiController.getAll);
router.post('/create', userApiController.create);

router.get('/username/:username', userApiController.getByUsername);
router.get('/:id', userApiController.getByID);
router.put('/:id/edit', userApiController.edit);
router.delete("/:id/delete", userApiController.remove);


export default router;
import { Router } from "express";
import userApiController from "../../controllers/user/userApiController.js";
import { isLoggedInAPI } from "../../middleware/authMiddleware.js";
import { upload } from "../../middleware/multer.js";


const router = Router();

router.post("/login",userApiController.login);

router.get('/', userApiController.getAll);
router.post('/create', upload.single("image"), userApiController.create);

router.get('/username/:username', userApiController.getByUsername);
router.get('/:id', userApiController.getByID);
router.put('/:id/edit', upload.single("image"), userApiController.edit);
router.delete("/:id/delete", userApiController.remove);


export default router;
import { Router } from "express";
import { verifyJWT } from '../middlewares/auth.middlewares.js';
import { createMenu,getMenu, updateMenu,deleteMenu } from "../controllers/menu.controller.js";
import multer from 'multer';


const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const router = Router();

router.post("/createMenu",verifyJWT,upload.single('menuImage'),createMenu)
router.get("/getMenu",getMenu);
router.post("/updateMenu/:userId/:menuId",verifyJWT,updateMenu)
router.delete("/deleteMenu/:userId/:menuId",verifyJWT,deleteMenu)

export default router;
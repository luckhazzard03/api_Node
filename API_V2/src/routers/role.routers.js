import { Router } from "express";
import { createRole,showIdRole,updateRole,deleteRole, showRole } from "../controllers/role.controller.js";


const router = Router();
router.post('/role',createRole);
router.get('/role',showRole);
router.get('/role/:id',showIdRole);
router.put('/role/:id',updateRole);
router.delete('/role/:id',deleteRole);

export default router;

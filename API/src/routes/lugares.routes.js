import { Router } from "express";

import {
  getLugares,
  getLugaresById,
  getLugaresByDestacado,
} from "../controllers/lugares.controllers.js";

const router = Router();

router.get("/lugares", getLugares);
router.get("/destacados", getLugaresByDestacado);
router.get("/getLuagresById/:id", getLugaresById);

export default router;

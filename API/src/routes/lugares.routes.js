import { Router } from "express";

import {
  getLugares,
  getLugaresByDestacado,
} from "../controllers/lugares.controllers.js";

const router = Router();

router.get("/", getLugares);
router.get("/destacados", getLugaresByDestacado);

export default router;

import { Router } from "express";
import { listarTareasDb } from "../controllers/tareas.controllers.js";
const router = Router();

router.route("/tareas").get(listarTareasDb).post();

export default router;

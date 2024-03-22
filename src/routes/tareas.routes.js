import { Router } from "express";
import {
  crearTareaDb,
  listarTareasDb,
  tareaBuscadaDb,
} from "../controllers/tareas.controllers.js";
const router = Router();

router.route("/tareas").get(listarTareasDb).post(crearTareaDb);
router.route("/tareas/:id").get(tareaBuscadaDb)

export default router;

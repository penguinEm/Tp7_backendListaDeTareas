import { Router } from "express";
import {
  crearTareaDb,
  listarTareasDb,
} from "../controllers/tareas.controllers.js";
const router = Router();

router.route("/tareas").get(listarTareasDb).post(crearTareaDb);

export default router;

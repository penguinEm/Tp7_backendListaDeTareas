import { Router } from "express";
import {
  borrarTareaDb,
  crearTareaDb,
  editarTareaDb,
  listarTareasDb,
  tareaBuscadaDb,
} from "../controllers/tareas.controllers.js";
const router = Router();

router.route("/tareas").get(listarTareasDb).post(crearTareaDb);
router
  .route("/tareas/:id")
  .get(tareaBuscadaDb)
  .put(editarTareaDb)
  .delete(borrarTareaDb)

export default router;

import Tarea from "../database/model/modelTarea.js";

//! GET de todas las tareas
export const listarTareasDb = async (req, res) => {
  try {
    const listaTareas = await Tarea.find({});
    res.status(200).json(listaTareas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al listar tareas" });
  }
};

//! POST crear tareas
export const crearTareaDb = async (req, res) => {
  try {
    const tareaNueva = new Tarea(req.body);
    await tareaNueva.save();
    res.status(201).json({
      mensaje: "La tarea fue creada exitosamente",
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({ mensaje: "La tarea no pudo ser creada" });
  }
};

//! GET de 1 tarea buscada por id
export const tareaBuscadaDb = async (req, res, id) => {
  try {
    const tareaBuscada = await Tarea.findById(req.params.id);
    if (tareaBuscada === null) {
      return res
        .status(404)
        .json({ mensaje: "No existe el producto con el id enviado" });
    }
    res.status(200).json({ mensaje: tareaBuscada });
  } catch (error) {
    console.error(error);
    res
      .status(400)
      .json({ mensaje: "No se pudo encontrar solicitado, id incorrecto" });
  }
};

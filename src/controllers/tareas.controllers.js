import Tarea from "../database/model/modelTarea.js"

//! GET de todas las tareas
export const listarTareasDb = (req, res) => {
  console.log("logica para listar tareas");
  res.send("enviando lista de tareas");
};

//! POST crear tareas
export const crearTareaDb = async (req, res) => {
  try {
    const tareaNueva = new Tarea(req.body)
    await tareaNueva.save()
    res.status(201).json({
      mensaje: "La tarea fue creada exitosamente"
    })
  } catch (error) {
    console.error(error);
    res.status(400).json({ mensaje: "La tarea no pudo ser creada" });
  }
};

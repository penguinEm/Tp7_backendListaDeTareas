//! GET de todas las tareas
export const listarTareasDb = (req, res) => {
  console.log("logica para listar tareas");
  res.send("enviando lista de tareas");
};

//! POST crear tareas
export const crearTareasDb = (req, res) =>{
  console.log("logica para listar tareas")
  res.send("Creando tareas")
}
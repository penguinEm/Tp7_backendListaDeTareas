import express from "express";

//! 1. CONFIGURAR UN PUERTO
const app = express();
app.set("port", process.env.PORT || 4000)
app.listen(app.get("port"), () =>{
    console.log(`Estoy en el puerto ` + app.get("port"))
})

//! 2. CONFUGURAR LOS MIDDLEWARES

//! 3. CONFIGURAR LAS RUTAS

import express from "express";
import cors from "cors";
import db from "./config/database.js";
import routes from "./routes/routes.js";

const app = express();

try {
    await db.authenticate();
    console.log("Base de datos conectada.");
} catch (error) {
    console.log("Error en la conexión: ", error)
}

app.use(cors());
app.use(express.json());
app.use("/clients", routes);

app.listen(5000, () => console.log("Servidor ejecutándose en el puerto 5000."))
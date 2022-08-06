import { Sequelize } from "sequelize";
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;
 
const Client = db.define('clients', {
    nombre: {
        type: DataTypes.STRING
    },
    apellido: {
        type: DataTypes.STRING
    },
    cedula: {
        type: DataTypes.STRING,
        unique: true
    },
    sexo: {
        type: DataTypes.STRING
    },
    fecha_nacimiento: {
        type: DataTypes.DATEONLY
    },
},{
    freezeTableName: true
});
 
export default Client;
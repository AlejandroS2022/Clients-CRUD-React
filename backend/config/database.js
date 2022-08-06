import { Sequelize } from "sequelize";
 
const db = new Sequelize('react_clients_app', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});
 
export default db;
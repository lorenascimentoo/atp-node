import {Sequelize} from "sequelize";
import Database from "./Database.js";

const ClienteTable = Database.define(
    'clientes',
    {
        id:{
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        nome:{
            type: Sequelize.INTEGER,
            allowNull: false
        },
        sobrenome:{
            type: Sequelize.INTEGER,
            allowNull: false
        }
    }
);

export default ClienteTable;
import { Sequelize } from "sequelize";
import * as config from "../../config";
import DB from "../interfaces/DB";
import User from "./models/User";

const sequelize = new Sequelize(config.database, config.user, config.password, {
    host: config.host,
    dialect: 'mysql',
    port: 3306,
});


const db:DB = {
    sequelize: sequelize,
};


export {sequelize, db};
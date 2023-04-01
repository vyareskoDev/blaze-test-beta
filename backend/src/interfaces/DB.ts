import { sequelize } from "../db/DBConfig";

export default interface DB {
    sequelize: typeof sequelize;
}
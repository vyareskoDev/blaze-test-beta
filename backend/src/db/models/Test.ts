import { db } from "../DBConfig";
import { DataTypes } from "sequelize";

const Test = db.sequelize.define("test", {
    id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    authorLogin: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: "users",
            key: "login"
        }
    },
    content: {
        type: DataTypes.JSON,
        allowNull: false
    }
});

export default Test;
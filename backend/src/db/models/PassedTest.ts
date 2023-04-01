import { db } from "../DBConfig";
import { DataTypes } from "sequelize";

const PassedTest = db.sequelize.define("passed_test", {
    id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    userLogin: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: "users",
            key: "login"
        }
    },
    timePassed: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.JSON,
        allowNull: false
    }
});


export default PassedTest;
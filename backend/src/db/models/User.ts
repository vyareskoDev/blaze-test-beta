import { db } from "../DBConfig";
import { DataTypes } from "sequelize";


const User = db.sequelize.define("user", {
    login: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        primaryKey: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    isTeacher: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
})

export default User;
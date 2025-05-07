import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";
import Publication from "./publicationModel.js";

const User = sequelize.define('user', {
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    first_name: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    username: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    password: {
        type: DataTypes.STRING(80),
        allowNull: false
    } 
}, {
    tableName: 'user'
});

User.hasMany(Publication, { foreignKey: 'publication_id' });
Publication.belongsTo(User, { foreignKey: 'user_id' });

export default User;

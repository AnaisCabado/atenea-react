import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";
import User from "./userModel.js";


const Publication = sequelize.define("publication", {
  publication_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  title: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  text: {
    type: DataTypes.STRING(125),
    allowNull: false,
  },
  category: {
    type: DataTypes.ENUM("event", "post"),
    allowNull: false,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  timestamps: false,
  tableName: "publication",
});

export default Publication;

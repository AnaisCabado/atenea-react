import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";
import publicationModel from "./publicationModel.js"; // asegúrate de que esto exista y sea correcto

const Event = sequelize.define("event", {
  event_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  date_time: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  publication_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
}, {
  timestamps: false,
  tableName: "event",
});

Event.belongsTo(publicationModel, { foreignKey: "publication_id" });

export default Event;

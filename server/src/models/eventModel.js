import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

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
  saved: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  publication_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
}, {
  timestamps: false,
  tableName: "event",
});

export default Event;

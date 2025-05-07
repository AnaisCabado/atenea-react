// models/postModel.js
import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

const Post = sequelize.define("post", {
  post_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  image: {
    type: DataTypes.STRING(125),
    allowNull: true,
  },
  saved: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  publication_post_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  timestamps: false,
  tableName: "post",
});

export default Post;

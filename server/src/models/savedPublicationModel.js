import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize.js';
import User from './userModel.js';
import Publication from './publicationModel.js';

const SavedPublication = sequelize.define('SavedPublication', {
  saved_publication_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  publication_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Publication,
      key: 'publication_id'
    }
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'user_id'
    }
  },
  saved_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: 'saved_publication',
  timestamps: false
});

// Asociaciones
SavedPublication.belongsTo(User, { foreignKey: 'user_id' });
SavedPublication.belongsTo(Publication, { foreignKey: 'publication_id', as: 'publication' });

export default SavedPublication;
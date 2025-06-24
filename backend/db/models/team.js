'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Team extends Model {
    static associate(models) {
    }
  }
  Team.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    description: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    logoUrl: {
      type: DataTypes.STRING,
      allowNull: true
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isHexColor: true // Ensures the color is a valid hex color code
      }
    },
    score: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      validate: {
        min: 0
      },
    },
  }, {
    sequelize,
    modelName: 'Team',
  });
  return Team;
};
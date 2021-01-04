'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    email: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg : "Email required"
        },
        isEmail: {
          msg: "Should follow email format (ex: foo@bar.com)"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg : "Task title required"
        },
        len: {
          args: [6],
          msg: "Password should be more than 6 characters"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
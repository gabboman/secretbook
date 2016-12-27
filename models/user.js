"use strict";

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    address: DataTypes.STRING,
    wishlist: DataTypes.STRING//Libros en los que puede estar interesado
  }, {
    classMethods: {
      associate: function(models) {
        User.hasMany(models.Task)
      }
    }
  }
  );

  return User;
};

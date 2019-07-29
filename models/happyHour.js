//Sequelize model

module.exports = function(sequelize, DataTypes) {
    var HappyHour = sequelize.define("HappyHour", {
      text: DataTypes.STRING,
      description: DataTypes.TEXT
    });
    return HappyHour;
  };

  //Maybe use associate 
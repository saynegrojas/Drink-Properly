//SEQUELIZE MODEL

//Sequelize package
const Sequelize = require('sequelize');

//reference connection to database
const sequelize = require('../config/connection.js');


module.exports = function(sequelize, DataTypes) {
    var HappyHour = sequelize.define("HappyHour", {
      text: DataTypes.STRING,
      description: DataTypes.TEXT,
      zip: DataTypes.INTEGER,
      drink_name: DataTypes.STRING,
      drink_price: DataTypes.INTEGER
    });
    return HappyHour;
  };

  //sequel joins
  //Maybe use associate 

  // //CREATE A LOCATION MODEL
  // var Location = sequelize.define('happyHour', {
  //   id: {
  //     type: Sequelize.INTEGER,
  //     autoIncrement: true,
  //     primaryKey: true
  //   },
  //   place_name: {
  //       type: Sequelize.STRING,
  //   },
  //   drink_name: {
  //     type: Sequelize.STRING
  //   },
  //   drink_price: {
  //     type: Sequelize.INTEGER
  //   },
  //   zip: {
  //     type: Sequelize.INTEGER
  //   }
  // }, {
  //   timestamps: false
  // });

  // //Sync Location
  // Location.sync();


  // //drinks with name, prices as a long string
  // //using js, seperate each name, price using split method
  // //var drinks, drinks.split(,)
  
  // module.exports = Location;
//SEQUELIZE MODEL

//Sequelize package
const Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
    var HappyHour = sequelize.define("HappyHour", {
      id: {
            type: Sequelize.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
          },
          place_name: {
              type: Sequelize.STRING,
              allowNull: false,
              require: true
          },
          zip_code: {
            type: Sequelize.INTEGER(11),
            allowNull: false,
            required: true
          },
          drink1_name: {
            type: Sequelize.STRING,
            allowNull: false
          },
          drink1_price: {
            type: Sequelize.DECIMAL(10,2),
            allowNull: false
          },
          drink2_name: {
            type: Sequelize.STRING,
            allowNull: false
          },
          drink2_price: {
            type: Sequelize.DECIMAL(10,2),
            allowNull: false
          },
          appetizer1_name: {
            type: Sequelize.STRING,
            allowNull: false
          },
          appetizer1_price: {
            type: Sequelize.DECIMAL(10,2),
            allowNull: false
          },
          appetizer2_name: {
            type: Sequelize.STRING,
            allowNull: false
          },
          appetizer2_price: {
            type: Sequelize.DECIMAL(10,2),
            allowNull: false
          },
          hour_start: {
            type: Sequelize.TIME,
            allowNull: false
          },
          hour_stop: {
            type: Sequelize.TIME,
            allowNull: false
          },
          day_start: {
            type: Sequelize.STRING,
            allowNull: false
          },
          day_end: {
            type: Sequelize.STRING,
            allowNull: false
          }
        }, {
          timestamps: false
        });

    return HappyHour;
  };

  //sequel joins
  //Maybe use associate 

  // //CREATE A LOCATION MODEL
  // module.exports = sequelize.define('HappyHour', {
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
//SEQUELIZE MODEL

//Sequelize package
const Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
    var HappyHour = sequelize.define("HappyHour", {
      id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },
          place_name: {
              type: Sequelize.STRING,
          },
          zip_code: {
            type: Sequelize.INTEGER
          },
          drink1_name: {
            type: Sequelize.STRING
          },
          drink1_price: {
            type: Sequelize.INTEGER
          },
          drink2_name: {
            type: Sequelize.STRING
          },
          drink2_price: {
            type: Sequelize.INTEGER
          },
          appetizer1_name: {
            type: Sequelize.STRING
          },
          appetizer1_price: {
            type: Sequelize.INTEGER
          },
          appetizer2_name: {
            type: Sequelize.STRING
          },
          appetizer2_price: {
            type: Sequelize.INTEGER
          },
          hour_start: {
            type: Sequelize.TIME
          },
          hour_stop: {
            type: Sequelize.TIME
          }
        }, {
          timestamps: false
        });

    return HappyHour;
  };

  /*id INT (11) NOT NULL AUTO_INCREMENT,
ZIPCODE CHAR(6),
restaurant VARCHAR(100) NOT NULL,
drink VARCHAR(100),
food VARCHAR(100),
price Decimal(10,2),
hour time(6),
PRIMARY KEY (id)
); */

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
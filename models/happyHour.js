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
          type: {
            type: Sequelize.STRING,
            allowNull: false,
            required: true
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
            allowNull: true,
            defaultStatus: "See store for drink specials"
          },
          drink1_price: {
            type: Sequelize.DECIMAL(10,2),
            allowNull: true,
            defaultStatus: "See store for drink specials"
          },
          drink2_name: {
            type: Sequelize.STRING,
            allowNull: true,
            defaultStatus: "See store for drink specials"
          },
          drink2_price: {
            type: Sequelize.DECIMAL(10,2),
            allowNull: true,
            defaultStatus: "See store for drink specials"
          },
          appetizer1_name: {
            type: Sequelize.STRING,
            allowNull: true,
            defaultStatus: "See store for appetizer specials"
          },
          appetizer1_price: {
            type: Sequelize.DECIMAL(10,2),
            allowNull: true,
            defaultStatus: "See store for appetizer specials"
          },
          appetizer2_name: {
            type: Sequelize.STRING,
            allowNull: true,
            defaultStatus: "See store for appetizer specials"
          },
          appetizer2_price: {
            type: Sequelize.DECIMAL(10,2),
            allowNull: true,
            defaultStatus: "See store for appetizer specials"
          },
          hour_start: {
            type: Sequelize.TIME,
            allowNull: true,
            defaultStatus: "Hours may vary"
          },
          hour_stop: {
            type: Sequelize.TIME,
            allowNull: true,
            defaultStatus: "Hours may vary"
          },
          day_start: {
            type: Sequelize.STRING,
            allowNull: true,
            defaultStatus: "Days may vary"
          },
          day_end: {
            type: Sequelize.STRING,
            allowNull: true,
            defaultStatus: "Days may vary"
          },
          lat: {
            type: Sequelize.FLOAT(10,7),
            allowNull: false,
            required: true
          },          
          lng: {
            type: Sequelize.FLOAT(10,7),
            allowNull: false,
            required: true
          }
        }, {
          timestamps: false
        });

    return HappyHour;
  };
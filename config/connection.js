// //CONNECTION.JS INITIATES CONNECTION TO MYSQL

// // //Dependencies
const Sequelize = require('sequelize');

//Create mysql connection using sequelize
const sequelize = new Sequelize('happy_hour_db', 'root', 'Corina08',{
    host: 'localhost',
    dialect: 'mysql2',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

//export connection
module.exports = sequelize;
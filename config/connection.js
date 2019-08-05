// //CONNECTION.JS INITIATES CONNECTION TO MYSQL

// // //Dependencies
const Sequelize = require('sequelize');

//Create mysql connection using sequelize
const sequelize = new Sequelize('drink_properly_db', 'root', 'Greg@rojas00',{
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

//export connection
module.exports = sequelize;

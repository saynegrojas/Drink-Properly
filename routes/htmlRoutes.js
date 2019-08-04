//================================================================
//HTML Route
//NPM Packages
//================================================================
const htmlRoute = require('../models');
const path = require('path');

//Routes
module.exports = function(app) {

    //HTML Index Route loads home
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });
    //Index is (convention) /index as a route
    app.get('/index', (req, res) => {
        res.sendFile(path.join(__dirname,'../public/index.html' ))
    })
};
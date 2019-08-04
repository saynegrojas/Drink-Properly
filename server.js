//npm packages
require('dotenv').config();
const express = require('express');

//instance app for express
const app = express();

//port
const PORT = process.env.PORT || 8080;

//connect with models
const db = require('./models');

//middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//static directory
app.use(express.static('public'));

//routes
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

//start server
db.sequelize.sync({force: false}).then( () => {
    app.listen(PORT, () => {
        console.log(`Listening on port: ${PORT}`);
    });
});

//export app
module.exports = app;

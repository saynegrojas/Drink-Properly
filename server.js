//================================================================
//NPM Packages
//================================================================

require('dotenv').config();
const express = require('express');
//================================================================
//Sets up express app
//================================================================

<<<<<<< HEAD
//================================================================
//Sets up express app
//================================================================

=======
>>>>>>> 105569eba6ba4c41f862a4ee56d32a30183590b9
//Instance app for express
const app = express();

//Port
const PORT = process.env.PORT || 8080;

//connect with models
const db = require('./models');

//middleware to handle data parsing
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//static directory
app.use(express.static('public'));

//routes
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

//Sync with sequelize models then start express app
db.sequelize.sync({force: false}).then( () => {
    app.listen(PORT, () => {
        console.log(`Listening on port: ${PORT}`);
    });
});

//export app
module.exports = app;
//================================================================
//API Route
//NPM Packages
//================================================================
const db = require('../models');

//Routes
module.exports = function(app){

    //GET route for getting all of happy hours
    app.get('/api/all', (req, res) => {
        db.HappyHour.findAll({}).then(dbHappyHour => {
            res.json(dbHappyHour);
        })
    });
    
    //GET route for returning happyhour of a specific category
    app.get('/api/happyHour/place_name/:place_name', (req, res) => {
        db.HappyHour.findAll({
            where: {
                place_name: req.params.place_name
            }
        }).then(result => {
            res.json(result);
        });
    });

    //GET route for retrieving a single happyHour
    app.post('/api/happyHour/:id', (req, res) => {
        db.HappyHour.findOne({
            where: {
                id: req.params.id
            }
        }).then(dbHappyHour => {
            res.json(dbHappyHour);
        });
    });

    //PUT route for updating happyHour
    app.put('/api/happyHour', (req, res) => {
        db.HappyHour.update(req.body, {
            where: {
                id: req.body.id
            }
        }).then(dbHappyHour => {
            res.json(dbHappyHour);
        })
    });
};


/*const Location = require('../models/happyHour.js');
*/
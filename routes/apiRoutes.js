const db = require('../models');

module.exports = function(app){

    //GET ALL HAPPYHOUR ROUTE
    app.get('/api/all', (req, res) => {
        db.HappyHour.findAll({}).then(dbHappyHour => {
            res.json(dbHappyHour);
        })
    });
    
    //GET ONE ROUTE
    app.get('/api/:hours', (req, res) => {
        if(req.params.happyHour){
            db.HappyHour.findAll({
                where: {
                    zip: req.params.happyHour
                }
            }).then(result => {
                res.json(result);
            });
        }
    });

    //ADD 
    app.post('/api/new', (req, res) => {
        db.HappyHour.create({
            zip: req.body.zip
        });
    });
};


/*const Location = require('../models/happyHour.js');


*/
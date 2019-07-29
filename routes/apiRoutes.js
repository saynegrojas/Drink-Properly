const db = require('../models');

module.exports = function(app){
    //GET all happyHour
    app.get('/api/happyHours', (req, res) => {
        db.HappyHour.findAll({}).then(dbHappyHour => {
            res.json(dbHappyHour);
        })
    })
};
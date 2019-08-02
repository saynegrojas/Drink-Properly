const htmlRoute = require('');

module.exports = function(app){

    //HTML index route
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });
};
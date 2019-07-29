const path = require('path');

module.exports = function(app){
    //html index route
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });
};
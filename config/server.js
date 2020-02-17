var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');


var app = express();
app.set('view engine', 'ejs'); // dizendo apra o express que o ejs cuidara das views * Ele enxerga automaticamente a pasta views
app.set('views', './app/views');

app.use(express.static('./app/public'));
app.use(bodyParser.urlencoded({extended: true}));
//app.use(check);
app.use(expressValidator()); 


consign()
    .include('./app/routes')
    .then('./config/dbConnection.js')
    .then('./app/models')
    .then('./app/controllers')
    .into(app);

module.exports = app;

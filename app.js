var express = require('express');
var app = express();
var mongoose = require('mongoose');
var config = require('./config');

//controllers
var setupController = require('./controllers/setupController');
var apiController = require('./controllers/apiController');

var port = process.env.PORT || 3000;

mongoose.Promise = global.Promise;
mongoose.connect(config.getDbConnectionString());
setupController(app);
apiController(app);

app.listen(port);
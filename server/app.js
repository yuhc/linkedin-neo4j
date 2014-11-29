var express = require('express'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    errorHandler = require('errorhandler');
    
var app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(methodOverride());
app.use(errorHandler({ dumpExceptions: true, showStack: true }));

// set up the RESTful API
var mainGraphApi = require('./controllers/graph.js');
app.get('/', mainGraphApi.index);

app.listen(8080);
console.log("Express server listening at http://localhost:8080");






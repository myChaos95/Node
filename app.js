// 'use strict';
var express = require('express');
var app = express();

var getA = require('./routes/get');
var postA = require('./routes/post.js');


var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/public', express.static(__dirname + '/public'));

app.set('view','./views');
app.set('view engine', 'jade')

app.get('/',  (req, res) => {
	res.sendFile( __dirname + '/views/index.html');
})

app.use('/yes',getA)

app.post('/yes', postA)

module.exports = app;
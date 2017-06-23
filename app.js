// 'use strict';
var express = require('express');
var app = express();
var router = require('./routes/index.js');

app.use('/public', express.static(__dirname + '/public'));

app.set('view','./views');
app.set('view engine', 'jade')

app.get('/',(req ,res) => {
	req.sendFile('./views/index.html');
})

app.use('no',routes);

module.exports = app;
// 'use strict';
var express = require('express');
var app = express();

var get = require('./routes/get.js');
var post = require('./routes/post.js');

var bodyParser = require('body-parser')

app.use('/public', express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view','./views');
app.set('view engine', 'jade')

app.get('/',  (req, res) => {
	res.sendFile( __dirname + '/views/index.html');
})

app.use('/get',get);
app.use('/post',post);

module.exports = app;
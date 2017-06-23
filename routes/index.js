var express = require('express');
var app = express();

var router = express.Router();

router.get('/', (req ,res) => {
	req.send('hello world');
})

router.get('/ok', (req ,res ) => {
	req.send('fine');
})

module.exports = router;
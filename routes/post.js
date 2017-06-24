var express = require('express');
var router = express.Router();

router.use('/', (req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin','*');
	var request = req.body;
	console.log(request)
	res.send(request);
})

module.exports = router;
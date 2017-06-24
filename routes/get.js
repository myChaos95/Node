var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin','*');
	var arr = [];
	arr.push(req.query);
	arr.push(req.query);
	res.send(arr);
})

module.exports = router;
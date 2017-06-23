var express = require('express');
var router = express.Router;

router.post('/', (req, res) => {
	var request = req.body;
	res.send(request);
})

module.exports = router;
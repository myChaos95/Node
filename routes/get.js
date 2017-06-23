var express = require('express');
var router = express.Router;

router.get('/', (req, res) => {
	res.send('this is get page');
})

module.exports = router;
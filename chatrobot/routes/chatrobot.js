var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    // res.send('respond with a resource');
    console.log(req.query);
    res.send('ok.');
});

module.exports = router;

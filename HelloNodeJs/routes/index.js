var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.get('/first', function (req, res, next) {
    res.json({
        name: 'zyzhang',
        pwd: '123456'
    })
});

module.exports = router;

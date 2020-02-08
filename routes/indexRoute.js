const express = require('express');
const robotConversion = require('../lib/robotText')
let router = express.Router();


router.get('/', function(req, res){
    res.render('index.pug');
})

router.get('/convert', function(req, res){
    let text = req.query.userText;

    res.end(robotConversion.robotConversion(text))
})

module.exports = router;
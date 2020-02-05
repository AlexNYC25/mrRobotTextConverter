const express = require('express');

let router = express.Router();

router.get('/', function(req, res){
    res.render('index.pug');
})

router.get('/convert', function(req, res){
    let text = req.query.userText;
    res.end(text)
})

module.exports = router;
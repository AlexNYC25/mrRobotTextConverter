const express = require('express');
const pug = require('pug');

const app = express();
const port = 3000;

app.set('view engine', 'pug');
app.set('views', __dirname.concat("/views"));

app.get('/', function(req, res) {
    res.render("index.pug");
});

app.get('/convert', function(req, res) {
    let text = req.query.userText;
    res.end(text)
})

app.listen(port);

const express = require('express');
const pug = require('pug');
const indexRoute = require('./routes/indexRoute')

const app = express();
const port = 3000;

app.use('/public', express.static(__dirname +  '/public'))
//app.use('/node_modules', express.static(__dirname +  '/node_modules'))
//app.use('/public/css', express.static('css'))

app.set('view engine', 'pug');
app.set('view options', { pretty: true });
app.set('views', __dirname.concat("/views"));

app.use('/', indexRoute);



app.listen(port);

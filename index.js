const express = require('express');
const pug = require('pug');
const indexRoute = require('./routes/indexRoute')
const convertRoute = require('./routes/convertRoute')

const app = express();
const port = 3000;

app.set('view engine', 'pug');
app.set('views', __dirname.concat("/views"));

app.use('/', indexRoute);



app.listen(port);

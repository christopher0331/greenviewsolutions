const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3010;
const morgan = require('morgan')
const path = require('path')
const habitData = require('../Database/index.js');

app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');

app.use(express.static(PUBLIC_DIR))

app.listen(port, () => console.log(`listening on port ${port}`)); 

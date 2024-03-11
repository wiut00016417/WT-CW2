const body_parser = require('body-parser')
const path = require('path')
const express = require('express');
const web_route = require('./routes/web')

global.mock_db = path.join(__dirname, './data/mock_db.json');

const app = express();

app.set('view engine', 'pug');

app.use('/css', express.static('public/css'))
app.use('/js', express.static('public/js'))

app.use('/', web_route);
const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
const path = require('path')
const express = require('express');

global.db = path.join(__dirname, './data/mock_db.json');

const web_route = require('./routes/web/home')
const api_route = require('./routes/api')

const app = express();

app.set('view engine', 'pug');

app.use('/css', express.static('public/css'))
app.use('/js', express.static('public/js'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', api_route);

app.use('/', web_route);

app.use((req, res) => {
    res.redirect('/');
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
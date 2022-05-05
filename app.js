const express = require('express');

const hbs = require('hbs');

require('dotenv').config();

const app = express();

// ****************** require body-parser ******************
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
// *********************************************************

app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

app.use(express.static('public'));

app.get('/login', (req, res) => {
  res.render('login-form');
});

app.post('/login', (req, res) => {
  const { username, pwd } = req.body;
  console.log('------------------------');
  console.log(`Username: ${username} - Password: ${pwd}`);
  console.log('------------------------');
  res.render('login-form', req.body);
});

// Render index page
app.get('/', (req, res) => {
  res.render('index');
});

app.listen(process.env.PORT, () =>
  console.log(`Running on port: ${process.env.PORT}`)
);

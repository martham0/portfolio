const express = require('express');
const app = express();
const hbs = require('hbs');
const path = require('path');

const publicDir = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialPath = path.join(__dirname, '../templates/partial');

//set up hbs folder location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialPath);

//static directory
app.use(express.static(publicDir));

app.get('', (req, res) => {
  res.render('index', { title: 'Welcome' });
});

app.get('/skills', (req, res) => {
  res.render('skills', { title: 'Skills' });
});

app.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact me' });
});
app.listen(4000, () => {
  console.log('server is up on port 4000');
});

// Bringing in the moduels
const express = require('express');
const exphbs = require('express-handlebars');

// Bringing in the app
const app = express();

// Setting the view engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Routing
app.get('/', (req, res) => {
  res.render('index', {
    title: 'سامانه پایش فرودگاه های کشور'
  });
});

app.get('/about', (req, res) => {
  res.render('about');
});

// Setting the port
const PORT = process.env.PORT || 5000;
// Starting the server
app.listen(PORT, () => console.log(`App running on port ${PORT}`));

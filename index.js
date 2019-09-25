// Bringing in the moduels
const express = require('express');
const expbs = require('express-handlebars');

// Bringing in the app
const app = express();

// Setting the view engine
app.engine('handlebars', expbs());
app.set('view engine', 'handlebars');

// Routing
app.get('/', (req, res) => {
  res.render('index');
});

// Setting the port
const PORT = process.env.PORT || 5000;
// Starting the server
app.listen(PORT, () => console.log(`App running on port ${PORT}`));

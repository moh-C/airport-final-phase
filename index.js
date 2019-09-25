const express = require('express');
const app = express();
const path = require('path');
const exphbs = require('express-handlebars');

// Setting the templating engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Setting the parsers
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Implementing the routers
app.use('/', require('./Routes/staticPages'));

// Setting the port
const PORT = process.env.PORT || 5000;

// Setting the server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});

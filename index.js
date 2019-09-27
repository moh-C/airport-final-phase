const express = require('express');
const path = require('path');
const hoganMiddleware = require('hogan-middleware');

const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'mustache');
app.engine('mustache', hoganMiddleware.__express);
app.use(express.static(path.join(__dirname, 'Public')));

// Setting the router
const router = require('./Routes/index');
app.use('/', router);

// Setting the port
const PORT = process.env.PORT || 5000;

// Adding a listener for the app
app.listen(PORT, (req, res) => console.log(`App running on port ${PORT}`));

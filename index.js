// Bringing in the moduels
const express = require('express');
const expbs = require('express-handlebars');

// Bringing in the app
const app = express();

// Setting the port
const PORT = process.env.PORT;
// Starting the server
app.listen(PORT, () => console.log(`App running on port ${PORT}`));

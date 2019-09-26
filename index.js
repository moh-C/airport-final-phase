// Bringing in the moduels
const express = require('express');
const path = require('path');

// Bringing in the app
const app = express();

// Setting the port
const PORT = process.env.PORT || 5000;
// Starting the server
app.listen(PORT, () => console.log(`App running on port ${PORT}`));

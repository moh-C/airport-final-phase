// Bringing in the moduels
const express = require('express');
const path = require('path');

// Bringing in the app
const app = express();

app.use('/', express.static(path.resolve(__dirname, 'assets')));

app.get('/home.html', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'Pages', 'Home', 'index.html'));
});

// Setting the port
const PORT = process.env.PORT || 5000;
// Starting the server
app.listen(PORT, () => console.log(`App running on port ${PORT}`));

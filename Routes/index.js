const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello from routes');
});

router.get('/home', (req, res) => {
  res.render('home');
});

module.exports = router;

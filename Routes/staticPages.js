const express = require('express');
const router = express.Router();
const path = require('path');

// Handling the main page router
router.get('/', (req, res) => {
  res.sendFile('hello');
});

module.exports = router;

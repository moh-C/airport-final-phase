const express = require('express');
const router = express.Router();

router.get('/home', (req, res) => {
  res.render('home');
});

router.get('/airport', (req, res) => {
  res.render('airport');
});

router.get('/login',(req,res)=>{
  res.render('login')
})

module.exports = router;

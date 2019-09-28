const express = require('express');
const router = express.Router();

router.get('/home.html', (req, res) => {
  res.render('home');
});

router.get('/airport.html', (req, res) => {
  res.render('airport');
});

router.get('/login.html', (req, res) => {
  res.render('login');
});

router.get('/Maintenance/Main.html', (req, res) => {
  res.render('maintenanceGuidelineMain');
});

router.get('/Maintenance/FAA_Guidelines.html', (req, res) => {
  res.render('FAAMaintenanceGuidelines');
});

router.get('/Maintenance/Routine_Guidelines.html', (req, res) => {
  res.render('RoutineMaintenanceGuidelines');
});

router.get('/Miscellaneous/Main.html', (req, res) => {
  res.render('miscellaneousMain');
});

router.get('/Miscellaneous/Acronyms.html', (req, res) => {
  res.render('miscellaneiysAcronyms');
});

router.get('/Miscellaneous/General_Info.html', (req, res) => {
  res.render('miscellaneousGeneralInfo');
});

module.exports = router;

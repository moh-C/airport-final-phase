const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.redirect('/Home.html');
});

router.get('/Home.html', (req, res) => {
  res.render('home');
});

router.get('/Statewide_Summary/Main.html', (req, res) => {
  res.render('stateMain');
});

router.get('/Statewide_Summary/PCI_Airport.html', (req, res) => {
  res.render('statePCIAirport');
});

router.get('/Statewide_Summary/Inventory_Condition.html', (req, res) => {
  res.render('stateInventoryCondition');
});

router.get('/Statewide_Summary/State_Wide_Summary_Report.html', (req, res) => {
  res.render('stateSummary');
});

router.get('/Airport.html', (req, res) => {
  res.render('airport');
});

router.get('/Login.html', (req, res) => {
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

router.get('/Pavement_Inspection/Main.html', (req, res) => {
  res.render('pavementMain');
});

router.get('/Pavement_Inspection/Overview.html', (req, res) => {
  res.render('pavementOverview');
});

router.get('/Pavement_Inspection/AC_Distress.html', (req, res) => {
  res.render('pavementACDistress');
});

router.get('/Pavement_Inspection/PCC_Distress.html', (req, res) => {
  res.render('pavementPCCDistress');
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

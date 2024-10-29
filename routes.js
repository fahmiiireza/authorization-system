// routes.js

const express = require('express');
const router = express.Router();
const {
  isAdmin,
  isHR,
  isFinanceManagerWithExperience,
  hasITClearance,
  isLegalDirector,
  isOpsStaffWithLimitedService,
  isExecutiveWithHighClearance,
  authorize
} = require('./middleware');

// Define routes with access control policies
router.get('/admin', authorize(isAdmin), (req, res) => {
  res.send('Welcome to the admin-only route.');
});

router.get('/hr-department', authorize(isHR), (req, res) => {
  res.send('Welcome to the HR department route.');
});

router.get('/finance-manager', authorize(isFinanceManagerWithExperience), (req, res) => {
  res.send('Welcome to the Finance Manager route.');
});

router.get('/it-clearance-2', authorize(hasITClearance), (req, res) => {
  res.send('Welcome to the IT Clearance Level 2+ route.');
});

router.get('/legal-director', authorize(isLegalDirector), (req, res) => {
  res.send('Welcome to the Legal Director route.');
});

router.get('/ops-combined', authorize(isOpsStaffWithLimitedService), (req, res) => {
  res.send('Welcome to the Operations Combined route.');
});

router.get('/exec-clearance-3', authorize(isExecutiveWithHighClearance), (req, res) => {
  res.send('Welcome to the Executive High Clearance route.');
});

module.exports = router;

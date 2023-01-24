const express = require('express');
const router = express.Router();
const ussdController = require('../controllers/ussdCtrl');

router.post('/', ussdController.ussd);
router.get('/', ussdController.welcome)

module.exports = router;
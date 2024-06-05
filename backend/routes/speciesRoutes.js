const express = require('express');
const db = require('../controllers/speciesControllers');

const router = express.Router();

router.get('/', db.getAllSpecies);

module.exports = router;

const express = require('express');
const db = require('../controllers/treeControllers');

const router = express.Router();

router.get('/', db.getAllTree);

module.exports = router;

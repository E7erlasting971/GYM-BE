const express = require('express');
const router = express.Router();
const KhoaTapController = require('../controllers/ThoiKhoaBieu.controllers');

// GET all ThoiKhoaBieu
router.get('/', KhoaTapController.getThoiKhoaBieu);

module.exports = router;
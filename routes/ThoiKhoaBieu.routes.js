const express = require('express');
const router = express.Router();
const KhoaTapController = require('../controllers/ThoiKhoaBieu.controllers');

// GET  ThoiKhoaBieu by idUser
router.get('/:id', KhoaTapController.getThoiKhoaBieu);

module.exports = router;
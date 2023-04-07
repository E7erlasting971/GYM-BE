const express = require('express');
const router = express.Router();
const ThoiKhoaBieuController = require('../controllers/ThoiKhoaBieu.controllers');

// GET  ThoiKhoaBieu by idUser
router.get('/:id', ThoiKhoaBieuController.getThoiKhoaBieu);

module.exports = router;
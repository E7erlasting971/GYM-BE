const express = require('express');
const router = express.Router();
const ChiTietHoaDonController = require('../controllers/ChiTietHoaDon.controllers');

// GET all Chi tiet hoa don
router.get('/:id', ChiTietHoaDonController.getChiTietHoaDonsByHoaDon);

module.exports = router;
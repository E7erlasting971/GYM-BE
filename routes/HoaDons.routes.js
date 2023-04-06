const express = require('express');
const router = express.Router();
const HoaDonController = require('../controllers/HoaDons.controllers');

// GET all Hoa Don
router.get('/getHoaDonsByHocVien/:id', HoaDonController.getHoaDonsByHocVien);
router.get('/getHoaDons', HoaDonController.getHoaDons);
// CREATE a new hoa don
router.post('/createHoaDon', HoaDonController.createHoaDon);

//update trang thai hoa don
router.put('/:id', HoaDonController.updateHoaDon);
//update trang thai hoa don
router.put('/updateHoaDonAsyncTKB/:id', HoaDonController.updateHoaDonAsyncTKB);

module.exports = router;
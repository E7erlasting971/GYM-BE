const express = require('express');
const router = express.Router();
const HocVienController = require('../controllers/HocViens.controllers');

// GET all HocViens
router.get('/', HocVienController.getAllHocViens);

// // GET HocVien by id
// router.get('/:id', HocVienController.getHocVienById);

// CREATE a new HocVien
router.post('/', HocVienController.createHocVien);

// UPDATE HocVien by id
router.put('/:id', HocVienController.updateHocVien);

// DELETE HocVien by id
router.delete('/:id', HocVienController.deleteHocVien);

module.exports = router;
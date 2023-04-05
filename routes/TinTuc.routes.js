const express = require('express');
const router = express.Router();
const TinTucController = require('../controllers/TinTucs.controllers');

// GET all TinTucs
router.get('/', TinTucController.getAllTinTucs);

// // GET TinTuc by id
router.get('/:id', TinTucController.getTinTucById);

// CREATE a new TinTuc
router.post('/', TinTucController.createTinTuc);

// UPDATE TinTuc by id
router.put('/:id', TinTucController.updateTinTuc);

// DELETE TinTuc by id
router.delete('/:id', TinTucController.deleteTinTuc);

module.exports = router;
 
const express = require('express');
const router = express.Router();
const KhoaTapController = require('../controllers/KhoaTaps.controllers');

// GET all KhoaTaps
router.get('/', KhoaTapController.getAllKhoaTaps);

// // GET KhoaTap by id
// router.get('/:id', KhoaTapController.getKhoaTapById);

// CREATE a new KhoaTap
router.post('/', KhoaTapController.createKhoaTap);

// UPDATE KhoaTap by id
router.put('/:id', KhoaTapController.updateKhoaTap);

// DELETE KhoaTap by id
router.delete('/:id', KhoaTapController.deleteKhoaTap);

module.exports = router;

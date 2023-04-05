const express = require('express');
const router = express.Router();
const KhoaTapController = require('../controllers/KhoaTaps.controllers');

// GET all KhoaTaps
router.get('/', KhoaTapController.getAllKhoaTaps);

// // GET KhoaTap by id
<<<<<<< HEAD
router.get('/:id', KhoaTapController.getKhoaTapById);
=======
// router.get('/:id', KhoaTapController.getKhoaTapById);
>>>>>>> 3b1721fddfda77f59c6c55f9e5c17e6014bd97dd

// CREATE a new KhoaTap
router.post('/', KhoaTapController.createKhoaTap);

// UPDATE KhoaTap by id
router.put('/:id', KhoaTapController.updateKhoaTap);

// DELETE KhoaTap by id
router.delete('/:id', KhoaTapController.deleteKhoaTap);

<<<<<<< HEAD
module.exports = router;
=======
module.exports = router;
>>>>>>> 3b1721fddfda77f59c6c55f9e5c17e6014bd97dd

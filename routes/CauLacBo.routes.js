const express = require('express');
const router = express.Router();
const CauLacBoController = require('../controllers/CauLacBos.controllers');

// GET all CauLacBos
router.get('/', CauLacBoController.getAllCauLacBos);

// // GET CauLacBo by id
// router.get('/:id', CauLacBoController.getCauLacBoById);

// CREATE a new CauLacBo
router.post('/', CauLacBoController.createCauLacBo);

// UPDATE CauLacBo by id
router.put('/:id', CauLacBoController.updateCauLacBo);

// DELETE CauLacBo by id
router.delete('/:id', CauLacBoController.deleteCauLacBo);

module.exports = router;

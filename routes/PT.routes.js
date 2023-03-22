const express = require('express');
const router = express.Router();
const PTController = require('../controllers/PTs.controllers');

// GET all PTs
router.get('/', PTController.getAllPTs);

// // GET PT by id
// router.get('/:id', PTController.getPTById);

// CREATE a new PT
router.post('/', PTController.createPT);

// UPDATE PT by id
router.put('/:id', PTController.updatePT);

// DELETE PT by id
router.delete('/:id', PTController.deletePT);

module.exports = router;

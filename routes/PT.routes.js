/**
 * @swagger
 * /api/pt:
 *   get:
 *     summary: Get all PTs
 *     description: Retrieve a list of all PTs.
 *     tags: [pt]
 *     responses:
 *       200:
 *         description: A list of PT objects.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/PT'
 *       500:
 *         description: Some error occurred while retrieving PTs.
 *   post:
 *     summary: Create a new PT
 *     description: Create a new PT with the provided data.
 *     tags: [pt]
 *     requestBody:
 *       description: PT object to be created.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PTInput'
 *     responses:
 *       200:
 *         description: The created PT object.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PT'
 *       500:
 *         description: Some error occurred while creating the PT.
 *   put:
 *     summary: Update a PT by id
 *     description: Update a PT with the provided id and data.
 *     tags: [pt]  
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the PT to be updated.
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       description: PT object to be updated.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PTInput'
 *     responses:
 *       200:
 *         description: The updated PT object.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PT'
 *       404:
 *         description: PT not found.
 *       500:
 *         description: Some error occurred while updating the PT.
 *   delete:
 *     summary: Delete a PT by id
 *     description: Delete a PT with the provided id.
 *     tags: [pt]  
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the PT to be deleted.
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: PT deleted successfully.
 *       404:
 *         description: PT not found.
 *       500:
 *         description: Some error occurred while deleting the PT.
 */

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
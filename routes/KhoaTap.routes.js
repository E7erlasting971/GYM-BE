/**
 * @swagger
 * /api/khoataps:
 *   get:
 *     summary: Get all KhoaTaps
 *     description: Retrieve a list of all KhoaTaps.
 *     tags: [KhoaTaps]
 *     responses:
 *       200:
 *         description: A list of KhoaTaps.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/KhoaTap'
 *       500:
 *         description: Some error occurred while retrieving KhoaTaps.
 *
 * /api/khoataps/{id}:
 *   get:
 *     summary: Get KhoaTap by ID
 *     description: Retrieve a KhoaTap by its ID.
 *     tags: [KhoaTaps]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the KhoaTap to retrieve.
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A KhoaTap object.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/KhoaTap'
 *       404:
 *         description: The requested KhoaTap was not found.
 *       500:
 *         description: Some error occurred while retrieving KhoaTap.

 *   post:
 *     summary: Create a new KhoaTap
 *     description: Create a new KhoaTap with the specified information.
 *     tags: [KhoaTaps]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/KhoaTap'
 *     responses:
 *       200:
 *         description: A KhoaTap object containing information about the newly created KhoaTap.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/KhoaTap'
 *       400:
 *         description: Bad request. The request was malformed or invalid.
 *       500:
 *         description: Internal server error. Something went wrong while creating the KhoaTap.
 *
 *   put:
 *     summary: Update a KhoaTap by ID
 *     description: Update an existing KhoaTap with the specified ID.
 *     tags: [KhoaTaps]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the KhoaTap to update.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/KhoaTap'
 *     responses:
 *       200:
 *         description: A KhoaTap object containing information about the updated KhoaTap.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/KhoaTap'
 *       400:
 *         description: Bad request. The request was malformed or invalid.
 *       404:
 *         description: The specified KhoaTap was not found.
 *       500:
 *         description: Internal server error. Something went wrong while updating the KhoaTap.
 *
 *   delete:
 *     summary: Delete a KhoaTap by ID
 *     description: Delete an existing KhoaTap with the specified ID.
 *     tags: [KhoaTaps]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the KhoaTap to delete.
 *     responses:
 *       204:
 *         description: The specified KhoaTap was successfully deleted.
 *       404:
 *         description: The specified KhoaTap was not found.
 *       500:
 *         description: Internal server error. Something went wrong while deleting the KhoaTap.
 */

const express = require('express');
const router = express.Router();
const KhoaTapController = require('../controllers/KhoaTaps.controllers');

// GET all KhoaTaps
router.get('/', KhoaTapController.getAllKhoaTaps);

// // GET KhoaTap by id
router.get('/:id', KhoaTapController.getKhoaTapById);
// // GET KhoaTap by id
router.get('/getKhoaTapByIdCLB/:id', KhoaTapController.getKhoaTapByIdCLB);
// CREATE a new KhoaTap
router.post('/', KhoaTapController.createKhoaTap);

// UPDATE KhoaTap by id
router.put('/:id', KhoaTapController.updateKhoaTap);

// DELETE KhoaTap by id
router.delete('/:id', KhoaTapController.deleteKhoaTap);

module.exports = router;
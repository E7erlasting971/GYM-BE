/**
 * @swagger
 * /api/caulacbos:
 *   get:
 *     summary: Retrieve a list of all CauLacBos
 *     tags: [CauLacBos]
 *     responses:
 *       200:
 *         description: A list of CauLacBos
 *
 *   post:
 *     summary: Create a new CauLacBo
 *     tags: [CauLacBos]
 *     requestBody:
 *       description: CauLacBo object that needs to be added
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *              $ref: '#/components/schemas/CauLacBo'
 *     responses:
 *       201:
 *         description: Successfully created a new CauLacBo
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CauLacBo'
 *       400:
 *         description: Invalid input, object invalid
 *       500:
 *         description: Internal server error
 *   put:
 *     summary: Update a CauLacBo by ID
 *     tags: [CauLacBos]
 *     description: Update a CauLacBo identified by the given ID.
 *      
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the CauLacBo to update.
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CauLacBoInput'
 *     responses:
 *       200:
 *         description: Successfully updated the CauLacBo.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CauLacBo'
 *       400:
 *         description: CauLacBo input is invalid.
 *       404:
 *         description: The requested CauLacBo was not found.
 *       500:
 *         description: Some error occurred while updating the CauLacBo.
 *   delete:
 *     summary: Delete a CauLacBo by ID
 *     tags: [CauLacBos]
 *     description: Delete a CauLacBo identified by the given ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the CauLacBo to delete.
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successfully deleted the CauLacBo.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CauLacBo'
 *       404:
 *         description: The requested CauLacBo was not found.
 *       500:
 *         description: Some error occurred while deleting the CauLacBo.
 */

const express = require('express');
const router = express.Router();
const CauLacBoController = require('../controllers/CauLacBos.controllers');

// GET all CauLacBos
router.get('/', CauLacBoController.getAllCauLacBos);
// CREATE a new CauLacBo
router.post('/', CauLacBoController.createCauLacBo);

// UPDATE CauLacBo by id
router.put('/:id', CauLacBoController.updateCauLacBo);

// DELETE CauLacBo by id
router.delete('/:id', CauLacBoController.deleteCauLacBo);

module.exports = router;
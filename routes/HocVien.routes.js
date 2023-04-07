/**
 * @swagger
 * /api/hocvien:
 *   get:
 *     summary: Get all HocViens
 *     description: Retrieve a list of all HocViens.
 *     tags: [hocvien]
 *     responses:
 *       200:
 *         description: A list of HocViens.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/HocVien'
 *       500:
 *         description: Some error occurred while retrieving HocViens.
 *
 *   post:
 *     summary: Create a new HocVien
 *     description: Create a new HocVien.
 *     tags: [hocvien]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/HocVienInput'
 *     responses:
 *       201:
 *         description: Successfully created a new HocVien.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/HocVien'
 *       400:
 *         description: HocVien input is invalid.
 *       500:
 *         description: Some error occurred while creating the HocVien.
 * /api/hocvien/{id}:
 *   put:
 *     summary: Update a HocVien
 *     description: Update a HocVien identified by the given ID.
 *     tags: [hocvien]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the HocVien to update.
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/HocVienInput'
 *     responses:
 *       200:
 *         description: Successfully updated the HocVien.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/HocVien'
 *       400:
 *         description: HocVien input is invalid.
 *       404:
 *         description: The requested HocVien was not found.
 *       500:
 *         description: Some error occurred while updating the HocVien.
 *
 *   delete:
 *     summary: Delete a HocVien
 *     description: Delete a HocVien identified by the given ID.
 *     tags: [hocvien]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the HocVien to delete.
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Successfully deleted the HocVien.
 *       404:
 *         description: The requested HocVien was not found.
 *       500:
 *         description: Some error occurred while deleting the HocVien.
 */

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
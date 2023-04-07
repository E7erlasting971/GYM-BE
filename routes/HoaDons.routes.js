/**
 * @swagger
 * /api/hoadon/getHoaDonsByHocVien/{id}:
 *   get:
 *     summary: Get all Hoa Dons by Hoc Vien ID
 *     description: Retrieve a list of all Hoa Dons by Hoc Vien ID.
 *     tags: [hoadon]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the Hoc Vien to retrieve Hoa Dons for.
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A list of Hoa Dons.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/HoaDon'
 *       500:
 *         description: Some error occurred while retrieving Hoa Dons.
 *
 * /api/hoadon/getHoaDons:
 *   get:
 *     summary: Get all Hoa Dons
 *     description: Retrieve a list of all Hoa Dons.
 *     tags: [hoadon]
 *     responses:
 *       200:
 *         description: A list of Hoa Dons.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/HoaDon'
 *       500:
 *         description: Some error occurred while retrieving Hoa Dons.
 * /api/hoadon/createHoaDon:
 *   post:
 *     summary: Create a new Hoa Don
 *     description: Create a new Hoa Don.
 *     tags: [hoadon]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/HoaDonInput'
 *     responses:
 *       201:
 *         description: Successfully created a new Hoa Don.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/HoaDon'
 *       400:
 *         description: Hoa Don input is invalid.
 *       500:
 *         description: Some error occurred while creating the Hoa Don.
 *   put:
 *     summary: Update a Hoa Don
 *     description: Update a Hoa Don identified by the given ID.
 *     tags: [hoadon]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the Hoa Don to update.
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/HoaDonInput'
 *     responses:
 *       200:
 *         description: Successfully updated the Hoa Don.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/HoaDon'
 *       400:
 *         description: Hoa Don input is invalid.
 *       404:
 *         description: The requested Hoa Don was not found.
 *       500:
 *         description: Some error occurred while updating the Hoa Don.
 */

const express = require('express');
const router = express.Router();
const HoaDonController = require('../controllers/HoaDons.controllers');

// GET all Hoa Don
router.get('/getHoaDonsByHocVien/:id', HoaDonController.getHoaDonsByHocVien);
router.get('/getHoaDons', HoaDonController.getHoaDons);
// CREATE a new hoa don
router.post('/createHoaDon', HoaDonController.createHoaDon);

//update trang thai hoa don
router.put('/:id', HoaDonController.updateHoaDon);
//update trang thai hoa don
router.put('/updateHoaDonAsyncTKB/:id', HoaDonController.updateHoaDonAsyncTKB);

module.exports = router;
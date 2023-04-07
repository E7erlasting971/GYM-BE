/**
 * @swagger
 * /api/chitiethoadon:
 *   get:
 *     summary: Returns all chitiethoadon by idHoaDon
 *     tags: [chitiethoadon]
 *     responses:
 *       200:
 *         description: List of chitiethoadon
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ChTietHoaDon'
 */
const express = require('express');
const router = express.Router();
const ChiTietHoaDonController = require('../controllers/ChiTietHoaDon.controllers');

// GET all Chi tiet hoa don
router.get('/:id', ChiTietHoaDonController.getChiTietHoaDonsByHoaDon);

module.exports = router;
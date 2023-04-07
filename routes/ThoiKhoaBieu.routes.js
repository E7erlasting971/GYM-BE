/**
 * @swagger
 * /api/thoikhoabieu/{id}:
 *   get:
 *     summary: Get ThoiKhoaBieu by idUser
 *     description: Retrieve a ThoiKhoaBieu by its idUser.
 *     tags: [thoikhoabieu]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the user whose ThoiKhoaBieu is to be retrieved.
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A ThoiKhoaBieu object containing information about the user's schedule.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ThoiKhoaBieu'
 *       404:
 *         description: The requested ThoiKhoaBieu was not found.
 *       500:
 *         description: Some error occurred while retrieving the ThoiKhoaBieu.
 *     default:
 *       description: Unexpected error.
 */

const express = require('express');
const router = express.Router();
const ThoiKhoaBieuController = require('../controllers/ThoiKhoaBieu.controllers');

// GET  ThoiKhoaBieu by idUser
router.get('/:id', ThoiKhoaBieuController.getThoiKhoaBieu);

module.exports = router;
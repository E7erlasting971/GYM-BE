/**
 * @swagger
 * tags:
 *   name: Tin Tức
 *   description: API quản lý tin tức
 * /api/tintucs:
 *   get:
 *     summary: Lấy danh sách tin tức
 *     tags: [Tin Tức]
 *     responses:
 *       200:
 *         description: Danh sách tin tức
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/TinTuc'
 *   post:
 *     summary: Tạo mới tin tức
 *     tags: [Tin Tức]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TinTucCreate'
 *     responses:
 *       200:
 *         description: Tin tức mới được tạo
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TinTuc'
 * /api/tintucs/{id}:
 *   get:
 *     summary: Lấy tin tức bởi ID
 *     tags: [Tin Tức]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID của tin tức cần lấy
 *     responses:
 *       200:
 *         description: Thông tin của tin tức
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TinTuc'
 *       404:
 *         description: Không tìm thấy tin tức với ID tương ứng
 *   put:
 *     summary: Cập nhật tin tức bởi ID
 *     tags: [Tin Tức]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID của tin tức cần cập nhật
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TinTucUpdate'
 *     responses:
 *       200:
 *         description: Tin tức được cập nhật thành công
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TinTuc'
 *       404:
 *         description: Không tìm thấy tin tức với ID tương ứng
 *   delete:
 *     summary: Xóa tin tức bởi ID
 *     tags: [Tin Tức]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID của tin tức cần xóa
 *     responses:
 *       200:
 *         description: Tin tức được xóa thành công
 *       404:
 *         description: Không tìm thấy tin tức với ID tương ứng
 * 
 */

const express = require('express');
const router = express.Router();
const TinTucController = require('../controllers/TinTucs.controllers');

// GET all TinTucs
router.get('/', TinTucController.getAllTinTucs);

// // GET TinTuc by id
router.get('/:id', TinTucController.getTinTucById);

// CREATE a new TinTuc
router.post('/', TinTucController.createTinTuc);

// UPDATE TinTuc by id
router.put('/:id', TinTucController.updateTinTuc);

// DELETE TinTuc by id
router.delete('/:id', TinTucController.deleteTinTuc);

module.exports = router;
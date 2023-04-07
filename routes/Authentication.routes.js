/**
 * @swagger
 * /api/authentication/:
 *   userlogin/post:
 *     summary: Authenticate user credentials
 *     description: Authenticate user credentials and return JWT token
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               TenDangNhap:
 *                 type: string
 *               MatKhau:
 *                 type: string
 *             required:
 *               - TenDangNhap
 *               - MatKhau
 *     responses:
 *       200:
 *         description: Authentication successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *       401:
 *         description: Authentication failed
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *   adminlogin/post:
 *     summary: Authenticate admin credentials
 *     description: Authenticate admin credentials and return JWT token
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               TenDangNhap:
 *                 type: string
 *               MatKhau:
 *                 type: string
 *             required:
 *               - TenDangNhap
 *               - MatKhau
 *     responses:
 *       200:
 *         description: Authentication successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *       401:
 *         description: Authentication failed
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */
const express = require('express');
const router = express.Router();
const AuthenticationController = require('../controllers/Authentication.controllers');

router.post('/userlogin', AuthenticationController.UserAuthentication);

router.post('/adminlogin', AuthenticationController.AdminAuthentication);
module.exports = router;
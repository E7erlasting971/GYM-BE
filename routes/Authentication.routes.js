const express = require('express');
const router = express.Router();
const AuthenticationController = require('../controllers/Authentication.controllers');

router.post('/userlogin', AuthenticationController.UserAuthentication);

module.exports = router;
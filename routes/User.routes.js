const express = require('express');
const router = express.Router();
const UserController = require('../controllers/Users.controllers');

// GET all users
router.get('/', UserController.getAllUsers);

// // GET user by id
// router.get('/:id', UserController.getUserById);

// CREATE a new user
router.post('/', UserController.createUser);

// UPDATE user by id
router.put('/:id', UserController.updateUser);

// DELETE user by id
router.delete('/:id', UserController.deleteUser);

module.exports = router;

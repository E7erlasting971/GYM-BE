const express = require('express');
const router = express.Router();
const HocVienController = require('../controllers/HocViens.controllers');
const passport = require('passport');
// GET all HocViens
router.get('/', HocVienController.getAllHocViens);

// // GET HocVien by id
// router.get('/:id', HocVienController.getHocVienById);

// CREATE a new HocVien
router.post('/ss', HocVienController.createHocVien);

// UPDATE HocVien by id
router.put('/:id', HocVienController.updateHocVien);

// Đăng nhập tài khoản
router.post('/dang-nhap', passport.authenticate('local', { session: false }), HocVienController.login);
// DELETE HocVien by id
router.delete('/:id', HocVienController.deleteHocVien);

module.exports = router; 


// const express = require('express');
// const router = express.Router();
// const HocVienController = require('../controllers/HocViens.controllers');
// const passport = require('passport');

// // GET all HocViens
// router.get('/', HocVienController.getAllHocViens);

// // CREATE a new HocVien
// router.post('/', HocVienController.createHocVien);

// // UPDATE HocVien by id
// router.put('/:id', HocVienController.updateHocVien);

// // Đăng nhập tài khoản
// router.post('/dang-nhap', passport.authenticate('local', { session: false }), HocVienController.login);

// // DELETE HocVien by id
// router.delete('/:id', HocVienController.deleteHocVien);

// // GET HocVien by id
// router.get('/:id', passport.authenticate('jwt', { session: false }), HocVienController.getHocVienById);

// module.exports = router;

const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const HocVien1 = require('../models/AuthenUser.models');

// Đăng ký học viên
router.post('/dangky', (req, res) => {
  const { TenDangNhap, MatKhau, HoTenHocVien, SDTHocVien, GioiTinhHocVien, NgaySinhHocVien, EmailHocVien } = req.body;
  const hocvien = new HocVien1({
    TenDangNhap,
    MatKhau: bcrypt.hashSync(MatKhau, 10),
    HoTenHocVien,
    SDTHocVien,
    GioiTinhHocVien,
    NgaySinhHocVien,
    EmailHocVien,
  });
  hocvien.save((err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Đã có lỗi xảy ra trong quá trình đăng ký học viên!');
    } else {
      res.status(200).send('Đăng ký học viên thành công!');
    }
  });
});

// Đăng nhập học viên
router.post('/dangnhap', (req, res) => {
    const { TenDangNhap, MatKhau } = req.body;
    HocVien1.findOne({ TenDangNhap }, (err, hocvien) => {
      if (err) {
        console.error(err);
        res.status(500).send('Đã có lỗi xảy ra trong quá trình đăng nhập học viên!');
      } else if (!hocvien) {
        res.status(404).send('Tên đăng nhập không tồn tại!');
      } else {
        if (bcrypt.compareSync(MatKhau, hocvien.MatKhau)) {
          const token = jwt.sign({ id: hocvien._id }, 'mysecretkey', { expiresIn: '1h' });
          res.status(200).send({ auth: true, token });
        } else {
          res.status(401).send('Mật khẩu không chính xác!');
        }
      }
    });
  });
  
  module.exports = router;
  
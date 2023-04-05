const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HocVienSchema = new Schema({
  TenDangNhap: {
    type: String,
    required: true,
    unique: true,
  },
  MatKhau: {
    type: String,
    required: true,
  },
  HoTenHocVien: {
    type: String,
    required: true,
  },
  SDTHocVien: {
    type: String,
    required: true,
  },
  GioiTinhHocVien: {
    type: String,
    required: true,
  },
  NgaySinhHocVien: {
    type: Date,
    required: true,
  },
  EmailHocVien: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('HocVien1', HocVienSchema);

const { Double, Timestamp } = require("mongodb");
const mongoose = require("mongoose");

const KhoaTapSchema = new mongoose.Schema({
  TenKhoaTap: {
    type: String,
    required: true,
  },
  MotaKhoaTap: {
    type: String,
    required: true,
    unique: true,
  },
  GiaTien: {
    type: Number,
    required: true,
  },
  TenPT: {
    type: String,
    required: true,
  },
  ChonNgayTap: {
    type: [String],
    enum: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    required: true,
    },
    GioBatDau: {
        type: String,
        required: true,
        match: [/^[0-9]{1,2}:[0-9]{2}$/, 'Giờ bắt đầu phải ở định dạng giờ:phút'],
      },
      GioKetThuc: {
        type: String,
        required: true,
        match: [/^[0-9]{1,2}:[0-9]{2}$/, 'Giờ kết thúc phải ở định dạng giờ:phút'],
      },
  ImageKhoaTap: {
    type: String,
    required: true,
  },
  ThoiGianKhoaTap: {
    type: Number,
    required: true,
  },

},{ versionKey: false } ); 
// loại bỏ thuộc tính __v vì khi mình POST lên thì nó tạo thêm giá trị " __v " vì cái này là tính năng của mongodb

module.exports = mongoose.model("KhoaTap", KhoaTapSchema);

const mongoose = require("mongoose");
const HocVienSchema = new mongoose.Schema({
    TenDangNhap: {
        type: String,
        required: true,
        unique: true
    },
    MatKhau: {
        type: String,
        required: true,
        // unique: true,
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
        type: Number,
        enum: [0, 1],
        required: true
    },
    NgaySinhHocVien: {
        type: Date,
        required: true,
    },
    EmailHocVien: {
        type: String,
        required: true,
    },
    NgayDangKy: {
        type: Date,
        default: Date.now
    }

}, { versionKey: false });
// loại bỏ thuộc tính __v vì khi mình POST lên thì nó tạo thêm giá trị " __v " vì cái này là tính năng của mongodb
module.exports = mongoose.model("HocVien", HocVienSchema);
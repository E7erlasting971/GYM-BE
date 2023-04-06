const { Double, Timestamp } = require("mongodb");
const mongoose = require("mongoose");

const HoaDonSchema = new mongoose.Schema({

    idHocVien: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'HocVien',
    },
    idKhoaTap: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'KhoaTap',
    },
    tongTien: {
        type: Number,
        required: true,
    },
    ngayTao: {
        type: Date,
        default: Date.now
    },
    trangThai: {
        type: String,
        required: true
    }
}, { versionKey: false });
// loại bỏ thuộc tính __v vì khi mình POST lên thì nó tạo thêm giá trị " __v " vì cái này là tính năng của mongodb

module.exports = mongoose.model("HoaDon", HoaDonSchema);
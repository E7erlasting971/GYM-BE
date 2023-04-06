const mongoose = require("mongoose");

const ChiTietHoaDonSchema = new mongoose.Schema({
    idHoaDon: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'HoaDon',
        require: true
    },
    idKhoaTap: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'KhoaTap',
        require: true
    },
    donGia: {
        type: Number,
        required: true,
    }
}, { versionKey: false });
// loại bỏ thuộc tính __v vì khi mình POST lên thì nó tạo thêm giá trị " __v " vì cái này là tính năng của mongodb

module.exports = mongoose.model("ChiTietHoaDon", ChiTietHoaDonSchema);
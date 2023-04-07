const mongoose = require("mongoose");

const ThoiKhoaBieuSchema = new mongoose.Schema({
    // idHoaDon: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'HoaDon',
    //     // required: true,
    // },
    idHocVien: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'HocVien',
        // required: true,
    },
    idKhoaTap: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'KhoaTap',
    },
    ngayBatDau: {
        type: Date
    },
    ngayKetThuc: {
        type: Date,
    }
}, { versionKey: false });
// loại bỏ thuộc tính __v vì khi mình POST lên thì nó tạo thêm giá trị " __v " vì cái này là tính năng của mongodb

module.exports = mongoose.model("ThoiKhoaBieu", ThoiKhoaBieuSchema);
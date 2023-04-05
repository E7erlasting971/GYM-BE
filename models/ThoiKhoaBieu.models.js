const { Double, Timestamp } = require("mongodb");
const mongoose = require("mongoose");

const ThoiKhoaBieuSchema = new mongoose.Schema({

    idHocVien: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'HocVien',
        // required: true,
    },
    idKhoaTap: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'KhoaTap',
    }

}, { versionKey: false });
const ThoiKhoaBieu = mongoose.model('ThoiKhoaBieu', ThoiKhoaBieuSchema);
module.exports = ThoiKhoaBieu;
// loại bỏ thuộc tính __v vì khi mình POST lên thì nó tạo thêm giá trị " __v " vì cái này là tính năng của mongodb

module.exports = mongoose.model("ThoiKhoaBieu", ThoiKhoaBieuSchema);
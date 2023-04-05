const mongoose = require("mongoose");

const TinTucSchema = new mongoose.Schema({
    TenChuDe: {
        type: String,
        required: false,
    },
    TheLoaiTinTuc: {
        type: String,
        required: false,
    },
    ImageTinTuc: {
        type: String,
        required: false,
    },
    NoiDungTinTuc: {
        type: String,
        required: false,
    },

}, { versionKey: false });
// loại bỏ thuộc tính __v vì khi mình POST lên thì nó tạo thêm giá trị " __v " vì cái này là tính năng của mongodb

module.exports = mongoose.model("TinTuc", TinTucSchema);
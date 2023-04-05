const mongoose = require("mongoose");

const CauLacBoSchema = new mongoose.Schema({
    TenCauLacBo: {
        type: String,
        required: true,
    },
    DiaChiCLB: {
        type: String,
        required: true,
        unique: true,
    },
    SoDienThoaiCLB: {
        type: String,
        required: true,
        unique: true,
    },
    ImageCLB: {
        type: String,
        required: true,
    },

}, { versionKey: false }); // loại bỏ thuộc tính __v vì khi mình POST lên thì nó tạo thêm giá trị " __v " vì cái này là tính năng của mongodb

module.exports = mongoose.model("CauLacBo", CauLacBoSchema);
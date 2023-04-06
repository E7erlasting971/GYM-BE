const mongoose = require("mongoose");

const PTSchema = new mongoose.Schema({

    TenPT: {
        type: String,
        required: true,
    },
    SoDienThoaiPT: {
        type: String,
        required: true,
        unique: true,
    },
    EmailPT: {
        type: String,
        required: true,
    },
    ImagePT: {
        type: String,
        required: true,
    }

}, { versionKey: false });
// loại bỏ thuộc tính __v vì khi mình POST lên thì nó tạo thêm giá trị " __v " vì cái này là tính năng của mongodb

module.exports = mongoose.model("PT", PTSchema);
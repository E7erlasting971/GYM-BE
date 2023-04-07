const mongoose = require("mongoose");
const AdminSchema = new mongoose.Schema({
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
}, { versionKey: false });
// loại bỏ thuộc tính __v vì khi mình POST lên thì nó tạo thêm giá trị " __v " vì cái này là tính năng của mongodb
module.exports = mongoose.model("Admin", AdminSchema);
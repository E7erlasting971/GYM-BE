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
ThoiKhoaBieuSchema.statics.getGioBatDau = async function(id) {
    const khoaTap = await this.findOne({ idKhoaTap: id }).lean().exec();
    return khoaTap ? (khoaTap.GioBatDau) : null;
};
ThoiKhoaBieuSchema.statics.getGioKetThuc = async function(id) {
    const khoaTap = await this.findOne({ idKhoaTap: id }).lean().exec();
    return khoaTap ? (khoaTap.GioKetThuc) : null;
};
ThoiKhoaBieuSchema.statics.getChonNgayTap = async function(id) {
    const khoaTap = await this.findOne({ idKhoaTap: id }).lean().exec();
    return khoaTap ? (khoaTap.ChonNgayTap) : null;
};
ThoiKhoaBieuSchema.statics.getNgayKetThuc = async function(id) {
    const khoaTap = await this.findOne({ idKhoaTap: id }).lean().exec();
    return khoaTap ? (khoaTap.ngayKetThuc) : null;
};
module.exports = mongoose.model("ThoiKhoaBieu", ThoiKhoaBieuSchema);
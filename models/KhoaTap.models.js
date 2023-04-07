const { Double, Timestamp } = require("mongodb");
const mongoose = require("mongoose");

const KhoaTapSchema = new mongoose.Schema({
    TenKhoaTap: {
        type: String,
        required: true,
    },
    MotaKhoaTap: {
        type: String,
        required: true,
    },
    GiaTien: {
        type: Number,
        required: true,
    },
    idPT: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'PT',
        // required: true,
    },
    idCLB: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CauLacBo',
        required: true
    },
    ChonNgayTap: {
        type: [String],
        enum: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        required: true,
    },
    GioBatDau: {
        type: String,
        //   required: true,
        match: [/^[0-9]{1,2}:[0-9]{2}$/, 'Giờ bắt đầu phải ở định dạng giờ:phút'],
    },
    GioKetThuc: {
        type: String,
        //     required: true,
        match: [/^[0-9]{1,2}:[0-9]{2}$/, 'Giờ kết thúc phải ở định dạng giờ:phút'],
    },
    ImageKhoaTap: {
        type: String,
        required: true,
    },
    ThoiGianKhoaTap: {
        type: Number,
        //   required: true,
    }
}, { versionKey: false });
// loại bỏ thuộc tính __v vì khi mình POST lên thì nó tạo thêm giá trị " __v " vì cái này là tính năng của mongodb
KhoaTapSchema.statics.getGioBatDau = async function(id) {
    const khoaTap = await this.findOne({ _id: id }).lean().exec();
    return khoaTap ? (khoaTap.GioBatDau) : null;
};
KhoaTapSchema.statics.getGioKetThuc = async function(id) {
    const khoaTap = await this.findOne({ _id: id }).lean().exec();
    return khoaTap ? (khoaTap.GioKetThuc) : null;
};
KhoaTapSchema.statics.getChonNgayTap = async function(id) {
    const khoaTap = await this.findOne({ _id: id }).lean().exec();
    return khoaTap ? (khoaTap.ChonNgayTap) : null;
};
module.exports = mongoose.model("KhoaTap", KhoaTapSchema);
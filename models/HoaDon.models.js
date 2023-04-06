const { Double, Timestamp } = require("mongodb");
const moment = require("moment");
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
    },
    ngayCapNhat: {
        type: Date,
        default: Date.now
    }
}, { versionKey: false });
// loại bỏ thuộc tính __v vì khi mình POST lên thì nó tạo thêm giá trị " __v " vì cái này là tính năng của mongodb
HoaDonSchema.statics.getNgayCapNhat = async function(idHoaDon) {
    const hoaDon = await this.findOne({ _id: idHoaDon }).lean().exec();
    return hoaDon ? moment(hoaDon.ngayCapNhat).format('YYYY-MM-DD') : null;
};

module.exports = mongoose.model("HoaDon", HoaDonSchema);
const KhoaTap = require('../models/KhoaTap.models');
const HoaDon = require('../models/HoaDon.models');
const ChiTietHoaDon = require('../models/ChiTietHoaDon.models');
const currentDate = new Date();
const dateString = currentDate.toISOString().substring(0, 10);
const mongoose = require("mongoose");
const dbHoaDon = mongoose.model("HoaDon");
const dbChiTietHoaDon = mongoose.model('ChiTietHoaDon');

exports.getHoaDonsByHocVien = async(req, res) => {
    try {
        const { id } = req.params;

        // khúc này là join 2 bảng PT và KhoaTap để lấy ra Tên PT trong Reactjs FormKhoaTap
        const HoaDons = await HoaDon.find({ idHocVien: id }).populate('idHocVien').populate("idKhoaTap");
        res.status(200).json(HoaDons);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
exports.getHoaDons = async(req, res) => {
    try {
        const HoaDons = await HoaDon.find().populate('idHocVien').populate("idKhoaTap");
        res.status(200).json(HoaDons);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
exports.createHoaDon = async(req, res) => {
    try {
        const newHoaDon = new dbHoaDon({
            idHocVien: req.body.idHocVien,
            idKhoaTap: req.body.idKhoaTap,
            tongTien: req.body.tongTien,
            ngayTao: req.body.ngayTao ? req.body.ngayTao.substring(0, 10) : dateString,
            trangThai: req.body.trangThai
        });
        const savedHoaDon = await newHoaDon.save();
        const hoaDonId = savedHoaDon._id;
        if (req.body.chiTietHoaDon && req.body.chiTietHoaDon.length) {
            for (let i = 0; i < req.body.chiTietHoaDon.length; i++) {
                const newChiTietHoaDon = new dbChiTietHoaDon({
                    idHoaDon: hoaDonId,
                    idKhoaTap: req.body.chiTietHoaDon[i].idKhoaTap,
                    donGia: req.body.chiTietHoaDon[i].donGia // thông tin chi tiết hóa đơn được truyền vào từ client
                });
                await newChiTietHoaDon.save();

            }
        }
        res.status(200).send({
            message: "Đã tạo hóa đơn thành công",
            HoaDon: savedHoaDon
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Lỗi không thể tạo hóa đơn" });
    }
}

exports.updateHoaDon = (req, res) => {
    // truyền vào req.params.KhoaTapId để mình xđ KhoaTap cần đc upd và các trường dữ liệu mới được cung cấp
    // bởi client thông qua req.body.
    HoaDon.findByIdAndUpdate(req.params.id, {
            trangThai: req.body.trangThai
                //  idCauLacBo:req.body.idCauLacBo,
        }, { new: true }) //  Chúng ta sử dụng { new: true } để trả về thông tin KhoaTap đã được cập nhật.
        .then(HoaDon => {
            if (!HoaDon) {
                return res.status(404).send({
                    message: "Hoa Don không tìm thấy với id  " + req.params.id
                });
            }
            res.send(KhoaTap);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Hoa Don không tìm thấy với id " + req.params.id
                });
            }
            return res.status(500).send({
                message: "Lỗi không thể update Hoa Don với id " + req.params.id
            });
        });
};
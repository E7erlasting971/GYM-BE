const KhoaTap = require('../models/KhoaTap.models');
const ThoiKhoaBieu = require('../models/ThoiKhoaBieu.models');
const ChiTietHoaDon = require('../models/ChiTietHoaDon.models');
const HoaDon = require('../models/HoaDon.models');
const currentDate = new Date();
const dateString = currentDate.toISOString().substring(0, 10);
const moment = require('moment');

exports.getHoaDonsByHocVien = async(req, res) => {
    try {
        const { id } = req.params;

        // khúc này là join 2 bảng PT và KhoaTap để lấy ra Tên PT trong Reactjs FormKhoaTap
        const HoaDons = await HoaDon.find({ idHocVien: id });
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
        const newHoaDon = new HoaDon({
            idHocVien: req.body.idHocVien,
            tongTien: req.body.tongTien,
            ngayTao: req.body.ngayTao ? req.body.ngayTao.substring(0, 10) : dateString,
            trangThai: "Chờ thanh toán"
        });
        if (req.body.chiTietHoaDon && req.body.chiTietHoaDon.length) {
            const savedHoaDon = await newHoaDon.save();
            const hoaDonId = savedHoaDon._id;
            if (req.body.chiTietHoaDon.length === 1) {
                const newChiTietHoaDon = new ChiTietHoaDon({
                    idHoaDon: hoaDonId,
                    idKhoaTap: req.body.chiTietHoaDon[0].idKhoaTap,
                    donGia: req.body.chiTietHoaDon[0].donGia // thông tin chi tiết hóa đơn được truyền vào từ client
                });
                const createHoaDon = await newChiTietHoaDon.save();
                res.status(200).send({
                    message: "Đã tạo hóa đơn thành công",
                    HoaDon: savedHoaDon,
                    cihiTietHoaDon: createHoaDon
                });
            }
            for (let i = 0; i < req.body.chiTietHoaDon.length; i++) {
                for (let j = i + 1; j < req.body.chiTietHoaDon.length; j++) {
                    if (req.body.chiTietHoaDon[i].idKhoaTap === req.body.chiTietHoaDon[j].idKhoaTap) {
                        res.send({
                            message: 'Trùng khóa tập'
                        });
                        return;
                    }
                    if (req.body.chiTietHoaDon[i].idKhoaTap.ChonNgayTap === (req.body.chiTietHoaDon[j].idKhoaTap.ChonNgayTap) &&
                        req.body.chiTietHoaDon[i].idKhoaTap.GioBatDau === (req.body.chiTietHoaDon[j].idKhoaTap.GioBatDau) &&
                        req.body.chiTietHoaDon[i].idKhoaTap.GioKetThuc === (req.body.chiTietHoaDon[j].idKhoaTap.GioKetThuc)) {
                        res.send({
                            message: 'Trùng tkb'
                        });
                        return;
                    }
                    console.log(hoaDonId);
                    console.log(req.body.chiTietHoaDon[i].idKhoaTap);
                    console.log(req.body.chiTietHoaDon[i].donGia);

                    const newChiTietHoaDon = new ChiTietHoaDon({
                        idHoaDon: hoaDonId,
                        idKhoaTap: req.body.chiTietHoaDon[i].idKhoaTap,
                        donGia: req.body.chiTietHoaDon[i].donGia // thông tin chi tiết hóa đơn được truyền vào từ client
                    });
                    const createHoaDon = await newChiTietHoaDon.save();
                    res.status(200).send({
                        message: "Đã tạo hóa đơn thành công",
                        HoaDon: savedHoaDon,
                        cihiTietHoaDon: createHoaDon
                    });
                }
            }
        } else {
            res.send({
                message: 'Rỗng khóa tập'
            });
            return;
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Lỗi không thể tạo hóa đơn" });
    }
}

exports.updateHoaDon = async(req, res) => {
    // truyền vào req.params.KhoaTapId để mình xđ KhoaTap cần đc upd và các trường dữ liệu mới được cung cấp
    // bởi client thông qua req.body.
    HoaDon.findByIdAndUpdate(req.params.id, {
            trangThai: req.body.trangThai,
            ngayCapNhat: req.body.ngayCapNhat
                //  idCauLacBo:req.body.idCauLacBo,
        }, { new: true }) //  Chúng ta sử dụng { new: true } để trả về thông tin KhoaTap đã được cập nhật.
        .then(HoaDon => {
            if (!HoaDon) {
                return res.status(404).send({
                    message: "Hoa Don không tìm thấy với id  " + req.params.id
                });
            }
            res.send(HoaDon);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Hoa Don không tìm thấy với id " + req.params.id
                });
            }
            console.log(err);
            return res.status(500).send({

                message: "Lỗi không thể update Hoa Don với id " + req.params.id
            });
        });

};

exports.updateHoaDonAsyncTKB = async(req, res) => {

    HoaDon.findByIdAndUpdate(req.params.id, {
            trangThai: "Đã thanh toán",
            ngayCapNhat: Date.now().toString()
        }, { new: true })
        .then(HoaDon => {
            if (!HoaDon) {
                return res.status(404).send({
                    message: "Hoa Don không tìm thấy với id  " + req.params.id
                });
            }
            res.send(HoaDon);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Hoa Don không tìm thấy với id " + req.params.id
                });
            }
            console.log(err);
            return res.status(500).send({

                message: "Lỗi không thể update Hoa Don với id " + req.params.id
            });
        });

    if (req.body.thoiKhoaBieu && req.body.thoiKhoaBieu.length) {
        for (let i = 0; i < req.body.thoiKhoaBieu.length; i++) {
            const startDate = new Date(await HoaDon.getNgayCapNhat(req.params.id));
            const khoaTap = await KhoaTap.findById(req.body.thoiKhoaBieu[i].idKhoaTap);
            const futureDate = new Date(moment(startDate).add(khoaTap.ThoiGianKhoaTap, 'months').format('YYYY-MM-DD'));
            const newThoiKhoaBieu = new ThoiKhoaBieu({
                idHocVien: req.body.thoiKhoaBieu[i].idHocVien,
                idKhoaTap: req.body.thoiKhoaBieu[i].idKhoaTap,
                ngayBatDau: startDate,
                ngayKetThuc: futureDate
            });
            await newThoiKhoaBieu.save();
        }
    }
};
const KhoaTap = require('../models/KhoaTap.models');
const HoaDon = require('../models/HoaDon.models');
const ChiTietHoaDon = require('../models/ChiTietHoaDon.models');

exports.getChiTietHoaDonsByHoaDon = async(req, res) => {
    try {
        const { id } = req.params;
        // khúc này là join 2 bảng PT và KhoaTap để lấy ra Tên PT trong Reactjs FormKhoaTap
        const ChiTietHoaDons = await ChiTietHoaDon.find({ idHoaDon: id }).populate('idHoaDon').populate("idKhoaTap");
        res.status(200).json(ChiTietHoaDons);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
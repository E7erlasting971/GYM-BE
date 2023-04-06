const KhoaTap = require('../models/KhoaTap.models');
const ThoiKhoaBieu = require('../models/ThoiKhoaBieu.models'); // In ra ngày trong tương lai dưới dạng 'dd/mm/yyyy'
const HoaDon = require('../models/HoaDon.models');
const moment = require('moment');

exports.getThoiKhoaBieu = async(req, res) => {
    try {
        const { id } = req.params;
        // khúc này là join 2 bảng PT và KhoaTap để lấy ra Tên PT trong Reactjs FormKhoaTap
        const ThoiKhoaBieu = await ThoiKhoaBieu.find({ idHocVien: id, }).populate('idHocVien').populate('idKhoaTap');
        res.status(200).json(ThoiKhoaBieu);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
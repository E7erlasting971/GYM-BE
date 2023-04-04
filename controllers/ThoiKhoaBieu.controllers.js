const KhoaTap = require('../models/ThoiKhoaBieu.models');
const PT = require('../models/HocVien.models');
const ThoiKhoaBieu = require('../models/ThoiKhoaBieu.models');

exports.getThoiKhoaBieu = async(req, res) => {
    try {
        const { id } = req.params;
        // khúc này là join 2 bảng PT và KhoaTap để lấy ra Tên PT trong Reactjs FormKhoaTap
        const ThoiKhoaBieu = await ThoiKhoaBieu.find({ _id: id }).populate('idHocVien').populate("idKhoaTap");
        res.status(200).json(ThoiKhoaBieu);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
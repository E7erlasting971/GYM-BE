const ThoiKhoaBieu = require('../models/ThoiKhoaBieu.models');

exports.getThoiKhoaBieu = async(req, res) => {
    try {
        const { id } = req.params;
        // khúc này là join 2 bảng PT và KhoaTap để lấy ra Tên PT trong Reactjs FormKhoaTap
        const thoiKhoaBieus = await ThoiKhoaBieu.find({ idHocVien: id }).populate();
        res.status(200).json(thoiKhoaBieus);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
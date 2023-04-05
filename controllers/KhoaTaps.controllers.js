const KhoaTap = require('../models/KhoaTap.models');
const PT = require('../models/PT.models');

exports.getAllKhoaTaps = async(req, res) => {
    try {
        // const KhoaTaps = await KhoaTap.find();
        // khúc này là join 2 bảng PT và KhoaTap để lấy ra Tên PT trong Reactjs FormKhoaTap
        const KhoaTaps = await KhoaTap.find().populate('idPT').populate('idCLB');
        res.status(200).json(KhoaTaps);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
exports.getKhoaTapById = async(req, res) => {
    try {
        const { id } = req.params;
        // khúc này là join 2 bảng PT và KhoaTap để lấy ra Tên PT trong Reactjs FormKhoaTap
        const KhoaTaps = await KhoaTap.find({ _id: id }).populate('idPT').populate('idCLB');
        res.status(200).json(KhoaTaps);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
exports.getKhoaTapByIdCLB = async(req, res) => {
    try {
        const { id } = req.params;
        console.log(id);
        // khúc này là join 2 bảng PT và KhoaTap để lấy ra Tên PT trong Reactjs FormKhoaTap
        const KhoaTaps = await KhoaTap.find({ idCLB: id }).populate('idPT').populate('idCLB');
        if (KhoaTaps.length === 0) {
            return res.status(404).json({ message: 'Không tìm thấy bất kỳ khóa tập nào' });
        }
        res.status(200).json(KhoaTaps);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// ở đây ta tạo KhoaTap model bên file KhoaTap.models với các thông tin từ req.body và lưu vào database bằng phương thức save
exports.createKhoaTap = async(req, res) => {
    try {
        const { TenKhoaTap, MotaKhoaTap, GiaTien, idPT, idCLB, ChonNgayTap, GioBatDau, GioKetThuc, ImageKhoaTap, ThoiGianKhoaTap } = req.body;
        const newKhoaTap = new KhoaTap({
            TenKhoaTap: TenKhoaTap,
            MotaKhoaTap: MotaKhoaTap,
            GiaTien: GiaTien,
            idPT: idPT,
            idCLB: idCLB,
            ChonNgayTap: ChonNgayTap,
            GioBatDau: GioBatDau,
            GioKetThuc: GioKetThuc,
            ImageKhoaTap: ImageKhoaTap,
            ThoiGianKhoaTap: ThoiGianKhoaTap
        });
        console.log(MotaKhoaTap);
        const savedKhoaTap = await newKhoaTap.save();
        res.status(200).send({ message: "Đã tạo khóa tập thành công", KhoaTap: savedKhoaTap });


    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Lỗi không thể tạo Khóa Tập" });
    }
}

exports.deleteKhoaTap = (req, res) => {
    const { id } = req.params;

    KhoaTap.findByIdAndDelete(id)
        .then(() => {
            res.status(204).send({

            });

        })
        .catch((err) => {
            res.status(500).send({
                message: `Lỗi không thể xóa khóa tập của: ${id}`,
                error: err.message,
            });
        });
}


exports.updateKhoaTap = (req, res) => {
    // truyền vào req.params.KhoaTapId để mình xđ KhoaTap cần đc upd và các trường dữ liệu mới được cung cấp
    // bởi client thông qua req.body.
    const { TenKhoaTap, MotaKhoaTap, GiaTien, idPT, idCLB, ChonNgayTap, GioBatDau, GioKetThuc, ImageKhoaTap, ThoiGianKhoaTap } = req.body;
    KhoaTap.findByIdAndUpdate(req.params.id, {
            TenKhoaTap: TenKhoaTap,
            MotaKhoaTap: MotaKhoaTap,
            GiaTien: GiaTien,
            idPT: idPT,
            idCLB: idCLB,
            ChonNgayTap: ChonNgayTap,
            GioBatDau: GioBatDau,
            GioKetThuc: GioKetThuc,
            ImageKhoaTap: ImageKhoaTap,
            ThoiGianKhoaTap: ThoiGianKhoaTap
        }, { new: true }) //  Chúng ta sử dụng { new: true } để trả về thông tin KhoaTap đã được cập nhật.
        .then(KhoaTap => {
            if (!KhoaTap) {
                return res.status(404).send({
                    message: "Khóa tập không tìm thấy với id  " + req.params.id
                });
            }
            res.send(KhoaTap);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Khóa tập không tìm thấy với id " + req.params.id
                });
            }
            return res.status(500).send({
                message: "Lỗi không thể update khóa tập với id " + req.params.id
            });
        });
};
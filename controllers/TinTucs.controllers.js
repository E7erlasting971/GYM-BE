const TinTuc = require('../models/TinTuc.models');
exports.getAllTinTucs = async (req, res) => {
    try {
        const TinTucs = await TinTuc.find();
        res.status(200).json(TinTucs);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
exports.getTinTucById = async (req, res) => {
    try {
    const TinTuc = await TinTuc.findById(req.params.id);
    if (!TinTuc) {
    return res.status(404).send({ message: "TinTuc not found with id " + req.params.id });
    }
    res.status(200).json(TinTuc);
    } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
    } 
    };

// ở đây ta tạo TinTuc model bên file TinTuc.models với các thông tin từ req.body và lưu vào database bằng phương thức save
exports.createTinTuc = async (req, res) => {
    try {
        const newTinTuc = new TinTuc({
            TenChuDe: req.body.TenChuDe,
            TheLoaiTinTuc: req.body.TheLoaiTinTuc,
            ImageTinTuc: req.body.ImageTinTuc,
            NoiDungTinTuc: req.body.NoiDungTinTuc,
        });

        const savedTinTuc = await newTinTuc.save();
        res.status(200).send({ message: "Đã tạo Tin Tuc thành công", TinTuc: savedTinTuc });


    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Lỗi không thể tạo Tin Tuc" });
    }
}

exports.deleteTinTuc = (req, res) => {
    const { id } = req.params;

    TinTuc.findByIdAndDelete(id)
        .then(() => {
            res.status(204).send({

            });

        })
        .catch((err) => {
            res.status(500).send({
                message: `Lỗi không thể xóa Tin Tuc của: ${id}`,
                error: err.message,
            });
        });
}



exports.updateTinTuc = (req, res) => {
    // truyền vào req.params.TinTucId để mình xđ TinTuc cần đc upd và các trường dữ liệu mới được cung cấp
    // bởi client thông qua req.body.
    TinTuc.findByIdAndUpdate(req.params.id, {
        TenChuDe: req.body.TenChuDe,
        TheLoaiTinTuc: req.body.TheLoaiTinTuc,
        ImageTinTuc: req.body.ImageTinTuc,
        NoiDungTinTuc: req.body.NoiDungTinTuc
    }, { new: true }) //  Chúng ta sử dụng { new: true } để trả về thông tin TinTuc đã được cập nhật.
        .then(TinTuc => {
            if (!TinTuc) {
                return res.status(404).send({
                    message: "TinTuc not found with id " + req.params.id
                });
            }
            res.send(TinTuc);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "TinTuc not found with id " + req.params.id
                });
            }
            return res.status(500).send({
                message: "Error updating Tin Tuc with id " + req.params.id
            });
        });
};
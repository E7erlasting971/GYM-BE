const HocVien = require('../models/HocVien.models');
const bcrypt = require('bcrypt');
exports.getAllHocViens = async(req, res) => {
    try {
        const HocViens = await HocVien.find();
        res.status(200).json(HocViens);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// chỗ này xử lý chuyển sang chỉ lấy ngày tháng năm và loại bỏ time trong data mongodb
const currentDate = new Date();
const dateString = currentDate.toISOString().substring(0, 10);
console.log(dateString); // output: "2023-02-03"


// ở đây ta tạo HocVien model bên file HocVien.models với các thông tin từ req.body và lưu vào database bằng phương thức save
exports.createHocVien = async(req, res) => {
    try {
        const { TenDangNhap, MatKhau, HoTenHocVien, SDTHocVien, GioiTinhHocVien, NgaySinhHocVien, EmailHocVien, NgayDangKy } = req.body;
        const existingHocVien = await HocVien.findOne({ TenDangNhap });
        console.log(MatKhau);
        if (existingHocVien) {
            res.status(409).send('Username already exists');
        } else {
            const hash = bcrypt.hashSync(MatKhau, bcrypt.genSaltSync(10));
            console.log(hash);
            const hocvien = new HocVien({
                TenDangNhap: TenDangNhap,
                MatKhau: hash,
                HoTenHocVien: HoTenHocVien,
                SDTHocVien: SDTHocVien,
                GioiTinhHocVien: GioiTinhHocVien,
                NgaySinhHocVien: NgaySinhHocVien,
                EmailHocVien: EmailHocVien,
                NgayDangKy: NgayDangKy ? NgayDangKy.substring(0, 10) : dateString
            });
            const savedHocVien = await hocvien.save();
            res.status(200).send({ message: "Đã tạo Hoc Vien thành công", HocVien: savedHocVien });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Lỗi không thể tạo Hoc Vien" });
    }
}

exports.deleteHocVien = (req, res) => {
    const { id } = req.params;

    HocVien.findByIdAndDelete(id)
        .then(() => {
            res.status(204).send({

            });

        })
        .catch((err) => {
            res.status(500).send({
                message: `Lỗi không thể xóa Hoc Vien của: ${id}`,
                error: err.message,
            });
        });
}



exports.updateHocVien = (req, res) => {
    // truyền vào req.params.HocVienId để mình xđ HocVien cần đc upd và các trường dữ liệu mới được cung cấp
    // bởi client thông qua req.body.
    HocVien.findByIdAndUpdate(req.params.id, {
            TenDangNhap: req.body.TenDangNhap,
            MatKhau: req.body.MatKhau,
            HoTenHocVien: req.body.HoTenHocVien,
            SDTHocVien: req.body.SDTHocVien,
            GioiTinhHocVien: req.body.GioiTinhHocVien,
            NgaySinhHocVien: req.body.NgaySinhHocVien,
            EmailHocVien: req.body.EmailHocVien,
            NgayDangKy: req.body.NgayDangKy ? req.body.NgayDangKy.substring(0, 10) : dateString
        }, { new: true }) //  Chúng ta sử dụng { new: true } để trả về thông tin HocVien đã được cập nhật.
        .then(HocVien => {
            if (!HocVien) {
                return res.status(404).send({
                    message: "Hoc Vien not found with id " + req.params.id
                });
            }
            res.send(HocVien);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "HocVien not found with id " + req.params.id
                });
            }
            return res.status(500).send({
                message: "Error updating Hoc Vien with id " + req.params.id
            });
        });
};
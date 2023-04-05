const HocVienModels = require('../models/HocVien.models');
const HocVien = require('../models/HocVien.models');
const bcrypt = require('bcrypt');

exports.UserAuthentication = async(req, res) => {
    const { TenDangNhap, MatKhau } = req.body;
    const hocvien = await HocVien.findOne({ "TenDangNhap": TenDangNhap });
    if (hocvien)
        if (bcrypt.compareSync(MatKhau, hocvien.MatKhau)) {
            res.send(hocvien);
        } else {
            res.status(401).send({ msg: 'Invalid password', hocvien });
        }
    else res.send("cound not find hoc vien");
};
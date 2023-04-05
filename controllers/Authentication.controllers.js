const HocVienModels = require('../models/HocVien.models');
const HocVien = require('../models/HocVien.models');
const bcrypt = require('bcrypt');

exports.UserAuthentication = async(req, res) => {
    const { TenDangNhap, MatKhau } = req.body;
    try {
        const hocvien = await HocVien.findOne({ "TenDangNhap": TenDangNhap });
        console.log(hocvien);
        console.log(bcrypt.hashSync(MatKhau, bcrypt.genSaltSync(10)));
        const salt = await bcrypt.genSalt(10);
        //const hash = await bcrypt.hash(MatKhau, salt);
        const passwordMatch = bcrypt.compareSync(MatKhau, hocvien.MatKhau);
        console.log(passwordMatch);
        if (passwordMatch) {
            res.send(hocvien);
        } else {

            res.status(401).send({ msg: 'Invalid password', HocVien: hocvien });

        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal server error');
    }
};
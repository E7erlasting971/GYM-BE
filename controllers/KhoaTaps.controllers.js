const KhoaTap = require('../models/KhoaTap.models');
exports.getAllKhoaTaps = async (req, res) => {
  try {
    const KhoaTaps = await KhoaTap.find();
    res.status(200).json(KhoaTaps);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


// ở đây ta tạo KhoaTap model bên file KhoaTap.models với các thông tin từ req.body và lưu vào database bằng phương thức save
exports.createKhoaTap = async (req, res) => {
    try {
      const newKhoaTap = new KhoaTap({
        TenKhoaTap:req.body.TenKhoaTap,
        MotaKhoaTap:req.body.MotaKhoaTap,
        GiaTien:req.body.GiaTien,
        TenPT:req.body.TenPT,
        ChonNgayTap:req.body.ChonNgayTap,
        GioBatDau:req.body.GioBatDau,
        GioKetThuc:req.body.GioKetThuc,
        ImageKhoaTap:req.body.ImageKhoaTap,
        ThoiGianKhoaTap:req.body.ThoiGianKhoaTap,
      });

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
    KhoaTap.findByIdAndUpdate(req.params.id, {
      TenKhoaTap:req.body.TenKhoaTap,
      MotaKhoaTap:req.body.MotaKhoaTap,
      GiaTien:req.body.GiaTien,
      TenPT:req.body.TenPT,
      ChonNgayTap:req.body.ChonNgayTap,
      GioBatDau:req.body.GioBatDau,
      GioKetThuc:req.body.GioKetThuc,
      ImageKhoaTap:req.body.ImageKhoaTap,
      ThoiGianKhoaTap:req.body.ThoiGianKhoaTap,
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
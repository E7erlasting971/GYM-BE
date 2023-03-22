const CauLacBo = require('../models/CauLacBo.models');
exports.getAllCauLacBos = async (req, res) => {
  try {
    const CauLacBos = await CauLacBo.find();
    res.status(200).json(CauLacBos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


// ở đây ta tạo CauLacBo model bên file CauLacBo.models với các thông tin từ req.body và lưu vào database bằng phương thức save
exports.createCauLacBo = async (req, res) => {
    try {
      const newCauLacBo = new CauLacBo(req.body);
  
      const savedCauLacBo = await newCauLacBo.save();
      res.status(200).send({ message: "Đã tạo khóa tập thành công", CauLacBo: savedCauLacBo });
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Lỗi không thể tạo CLB" });
    }
  }
  
  exports.deleteCauLacBo = (req, res) => {
    const { id } = req.params;
  
    CauLacBo.findByIdAndDelete(id)
      .then(() => {
        res.status(204).send({
  
        });
        
      })
      .catch((err) => {
        res.status(500).send({
          message: `Lỗi không thể xóa CLB của: ${id}`,
          error: err.message,
        });
      });
  }
  
  
  
  exports.updateCauLacBo = (req, res) => {
    // truyền vào req.params.CauLacBoId để mình xđ CauLacBo cần đc upd và các trường dữ liệu mới được cung cấp
    // bởi client thông qua req.body.
    CauLacBo.findByIdAndUpdate(req.params.id, {
        TenCauLacBo:req.body.TenCauLacBo,
        DiaChiCLB:req.body.DiaChiCLB,
        SoDienThoaiCLB:req.body.SoDienThoaiCLB,
        ImageCLB:req.body.ImageCLB,
    }, { new: true }) //  Chúng ta sử dụng { new: true } để trả về thông tin CauLacBo đã được cập nhật.
      .then(CauLacBo => {
        if (!CauLacBo) {
          return res.status(404).send({
            message: "CLB không tìm thấy với id  " + req.params.id
          });
        }
        res.send(CauLacBo);
      }).catch(err => {
        if (err.kind === 'ObjectId') {
          return res.status(404).send({
            message: "CLB không tìm thấy với id " + req.params.id
          });
        }
        return res.status(500).send({
          message: "Lỗi không thể update CLB với id " + req.params.id
        });
      });
  };
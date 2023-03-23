const PT = require('../models/PT.models');
exports.getAllPTs = async (req, res) => {
  try {
    const PTs = await PT.find();
    res.status(200).json(PTs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


// ở đây ta tạo PT model bên file PT.models với các thông tin từ req.body và lưu vào database bằng phương thức save
exports.createPT = async (req, res) => {
  try {
    const newPT = new PT({
        TenPT: req.body.TenPT,
        SoDienThoaiPT: req.body.SoDienThoaiPT,
        EmailPT: req.body.EmailPT,
        ImagePT: req.body.ImagePT
    });

    const savedPT = await newPT.save();
    res.status(200).send({ message: "Đã tạo PT thành công", PT: savedPT });
  

  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Lỗi không thể tạo PT" });
  }
}

exports.deletePT = (req, res) => {
  const { id } = req.params;

  PT.findByIdAndDelete(id)
    .then(() => {
      res.status(204).send({

      });
      
    })
    .catch((err) => {
      res.status(500).send({
        message: `Lỗi không thể xóa PT của: ${id}`,
        error: err.message,
      });
    });
}



exports.updatePT = (req, res) => {
  // truyền vào req.params.PTId để mình xđ PT cần đc upd và các trường dữ liệu mới được cung cấp
  // bởi client thông qua req.body.
  PT.findByIdAndUpdate(req.params.id, {
    TenPT: req.body.TenPT,
    SoDienThoaiPT: req.body.SoDienThoaiPT,
    EmailPT: req.body.EmailPT,
    ImagePT: req.body.ImagePT
  }, { new: true }) //  Chúng ta sử dụng { new: true } để trả về thông tin PT đã được cập nhật.
    .then(PT => {
      if (!PT) {
        return res.status(404).send({
          message: "PT not found with id " + req.params.id
        });
      }
      res.send(PT);
    }).catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: "PT not found with id " + req.params.id
        });
      }
      return res.status(500).send({
        message: "Error updating PT with id " + req.params.id
      });
    });
};


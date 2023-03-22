const User = require('../models/User.models');
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


// ở đây ta tạo user model bên file user.models với các thông tin từ req.body và lưu vào database bằng phương thức save
exports.createUser = async (req, res) => {
  try {
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    });

    const savedUser = await newUser.save();
    res.status(200).send({ message: "Đã tạo User thành công", user: savedUser });
  

  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Lỗi không thể tạo User" });
  }
}

exports.deleteUser = (req, res) => {
  const { id } = req.params;

  User.findByIdAndDelete(id)
    .then(() => {
      res.status(204).send({

      });
      
    })
    .catch((err) => {
      res.status(500).send({
        message: `Lỗi không thể xóa user của: ${id}`,
        error: err.message,
      });
    });
}



exports.updateUser = (req, res) => {
  // truyền vào req.params.userId để mình xđ user cần đc upd và các trường dữ liệu mới được cung cấp
  // bởi client thông qua req.body.
  User.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  }, { new: true }) //  Chúng ta sử dụng { new: true } để trả về thông tin user đã được cập nhật.
    .then(user => {
      if (!user) {
        return res.status(404).send({
          message: "User not found with id " + req.params.id
        });
      }
      res.send(user);
    }).catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: "User not found with id " + req.params.id
        });
      }
      return res.status(500).send({
        message: "Error updating user with id " + req.params.id
      });
    });
};
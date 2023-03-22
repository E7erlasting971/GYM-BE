const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },

},{ versionKey: false } ); 
// loại bỏ thuộc tính __v vì khi mình POST lên thì nó tạo thêm giá trị " __v " vì cái này là tính năng của mongodb

module.exports = mongoose.model("User", userSchema);

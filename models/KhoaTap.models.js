const { Double, Timestamp } = require("mongodb");
const mongoose = require("mongoose");

const KhoaTapSchema = new mongoose.Schema({
<<<<<<< HEAD
    TenKhoaTap: {
        type: String,
        required: true,
    },
    MoTaKhoaTap: {
        type: String,
        required: true,
    },
    GiaTien: {
        type: Number,
        required: true,
    },
    idPT: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'PT',
        // required: true,
    },
    idCLB: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CauLacBo',
    },
    ChonNgayTap: {
        type: [String],
        enum: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        required: true,
    },
    GioBatDau: {
        type: String,
        //   required: true,
        match: [/^[0-9]{1,2}:[0-9]{2}$/, 'Giờ bắt đầu phải ở định dạng giờ:phút'],
    },
    GioKetThuc: {
        type: String,
        //     required: true,
        match: [/^[0-9]{1,2}:[0-9]{2}$/, 'Giờ kết thúc phải ở định dạng giờ:phút'],
    },
    ImageKhoaTap: {
        type: String,
        required: true,
    },
    ThoiGianKhoaTap: {
        type: Number,
        //   required: true,
    },
    // idCauLacBo: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: 'CauLacBo',
    // //  required: true,
    // },

}, { versionKey: false });
=======
  TenKhoaTap: {
    type: String,
    required: true,
  },
  MotaKhoaTap: {
    type: String,
    required: true,
    unique: true,
  },
  GiaTien: {
    type: Number,
    required: true,
  },
  idPT: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'PT',
   // required: true,
  },
  ChonNgayTap: {
    type: [String],
    enum: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    required: true,
    },
    GioBatDau: {
        type: String,
     //   required: true,
        match: [/^[0-9]{1,2}:[0-9]{2}$/, 'Giờ bắt đầu phải ở định dạng giờ:phút'],
      },
      GioKetThuc: {
        type: String,
   //     required: true,
        match: [/^[0-9]{1,2}:[0-9]{2}$/, 'Giờ kết thúc phải ở định dạng giờ:phút'],
      },
  ImageKhoaTap: {
    type: String, 
    required: true,
  },
  ThoiGianKhoaTap: {
    type: Number,
 //   required: true,
  },
  // idCauLacBo: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'CauLacBo',
  // //  required: true,
  // },

},{ versionKey: false } ); 
>>>>>>> 3b1721fddfda77f59c6c55f9e5c17e6014bd97dd
const KhoaTap = mongoose.model('KhoaTap', KhoaTapSchema);
module.exports = KhoaTap;
// loại bỏ thuộc tính __v vì khi mình POST lên thì nó tạo thêm giá trị " __v " vì cái này là tính năng của mongodb

<<<<<<< HEAD
module.exports = mongoose.model("KhoaTap", KhoaTapSchema);
=======
module.exports = mongoose.model("KhoaTap", KhoaTapSchema); 

 
>>>>>>> 3b1721fddfda77f59c6c55f9e5c17e6014bd97dd

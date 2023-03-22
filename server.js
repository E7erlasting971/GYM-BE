const express =require("express");
 const cors = require('cors');
const mongoose = require("mongoose");
const app = express();

const uri = 'mongodb+srv://lythinh1805:Thinh123456@cluster0.f5wz3di.mongodb.net/WibuGym?retryWrites=true&w=majority'

// Kết nối tới MongoDB
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));
  
  // khai báo sử dụng route của user và kết nối tới MongoDB,sử dụng middleware bodyParser
  // truy cập thông tin được gửi từ client thông qua body của request
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());
// Khai báo sử dụng các route ~
const userRoutes = require('./routes/User.routes');
app.use('/api/users', userRoutes);
const KhoaTapRoutes = require('./routes/KhoaTap.routes');
app.use('/api/khoataps', KhoaTapRoutes);
const CauLacBoRoutes = require('./routes/CauLacBo.routes');
app.use('/api/caulacbos', CauLacBoRoutes);
const PTRoutes = require('./routes/PT.routes');
app.use('/api/pts', PTRoutes);
const TinTucRoutes = require('./routes/TinTuc.routes');
app.use('/api/tintucs', TinTucRoutes);
const HocVienRoutes = require('./routes/HocVien.routes');
app.use('/api/hocviens', HocVienRoutes);

// Khởi động server
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
 

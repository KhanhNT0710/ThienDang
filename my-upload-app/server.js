const express = require('express');
const cors = require('cors');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

const app = express();

// Cấu hình CORS
app.use(cors({
    origin: '*', // Cho phép tất cả các domain (hoặc thay đổi thành domain cụ thể nếu cần)
    methods: ['GET', 'POST'], // Các phương thức được cho phép
    allowedHeaders: ['Content-Type'], // Các header được cho phép
}));
app.use(cors());
app.use(express.json());
// Tạo thư mục uploads nếu chưa có
if (!fs.existsSync('uploads')) {
    fs.mkdirSync('uploads');
}

// Cấu hình multer để lưu file upload
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});

const upload = multer({ storage: storage });

app.post('/upload', upload.single('file'), (req, res) => {
    const imageUrl = `http://denlongthiendang.com/uploads/${req.file.filename}`; // Đường dẫn đến file đã upload
    res.status(200).json({ filePath: imageUrl });
});

// Khởi động server
// Khởi động server
const PORT = process.env.PORT || 3000; // Sử dụng PORT từ Vercel hoặc cổng 3000
app.listen(PORT, () => {
});

const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());

// Cấu hình lưu trữ file
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Thêm timestamp vào tên file
    },
});

const upload = multer({ storage: storage });

// Tạo endpoint để upload file
app.post('/upload', upload.single('file'), (req, res) => {
    res.json({ filePath: `uploads/${req.file.filename}` });
});

// Khởi động server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
});

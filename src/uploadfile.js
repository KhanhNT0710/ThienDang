const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const jsonServer = require('json-server'); // JSON Server

const app = express();
app.use(cors());
app.use(express.json()); // Cho phép đọc dữ liệu JSON

// Cấu hình lưu trữ file
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadPath = 'uploads/';
        if (!fs.existsSync(uploadPath)) {
            fs.mkdirSync(uploadPath); // Tạo thư mục nếu chưa tồn tại
        }
        cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Thêm timestamp vào tên file
    },
});

const upload = multer({ storage: storage });

// Tạo endpoint để upload file
app.post('/upload', upload.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
    }

    const fileUrl = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;

    // Ghi URL vào JSON Server
    const data = { id: Date.now(), imageUrl: fileUrl };

    // Đọc file db.json hiện có
    const dbFile = './db.json';
    const dbData = JSON.parse(fs.readFileSync(dbFile, 'utf-8'));

    // Thêm dữ liệu ảnh mới
    dbData.images.push(data);

    // Ghi lại vào file db.json
    fs.writeFileSync(dbFile, JSON.stringify(dbData, null, 2));

    res.json({ imageUrl: fileUrl });
});

// Phục vụ file ảnh tĩnh trong thư mục "uploads"
app.use('/uploads', express.static('uploads'));

// Khởi động JSON Server cho các API quản lý dữ liệu ảnh
const router = jsonServer.router('db.json'); // Chỉ định file db.json
const middlewares = jsonServer.defaults();
app.use('/api', middlewares, router); // Đường dẫn cho API: /api

// Khởi động server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

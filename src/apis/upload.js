import multer from 'multer';
import fs from 'fs';
import path from 'path';
import cors from 'cors';

// Tạo thư mục uploads nếu chưa có
if (!fs.existsSync('uploads')) {
    fs.mkdirSync('uploads');
}

// Cấu hình multer để lưu file upload
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Địa chỉ lưu file
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Thêm timestamp vào tên file
    },
});

const upload = multer({ storage: storage }); // Khởi tạo multer với cấu hình

export const config = {
    api: {
        bodyParser: false, // Tắt bodyParser để multer xử lý
    },
};

// Xử lý yêu cầu
const handler = async (req, res) => {
    // Sử dụng CORS cho tất cả các yêu cầu
    cors()(req, res, async () => {
        if (req.method === 'POST') {
            upload.single('file')(req, res, (err) => {
                if (err) {
                    return res.status(500).json({ error: err.message });
                }

                // Lưu thông tin vào db.json
                const imageUrl = `http://denlongthiendang.com/uploads/${req.file.filename}`;
                const imageData = { url: imageUrl };

                // Ghi lại URL vào db.json
                const data = JSON.parse(fs.readFileSync('db.json'));
                data.images.push(imageData);
                fs.writeFileSync('db.json', JSON.stringify(data, null, 2));

                res.status(200).json({ filePath: imageUrl });
            });
        } else {
            res.setHeader('Allow', ['POST']);
            res.status(405).end(`Method ${req.method} Not Allowed`);
        }
    });
};

export default handler;

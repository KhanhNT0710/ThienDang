import multer from 'multer';
import cors from 'cors';

const storage = multer.memoryStorage(); // Sử dụng memoryStorage để không cần tạo thư mục uploads
const upload = multer({ storage });

const handler = async (req, res) => {
    cors()(req, res, async () => {
        if (req.method === 'POST') {
            upload.single('file')(req, res, (err) => {
                if (err) {
                    return res.status(500).json({ error: err.message });
                }

                // Giả sử bạn đã xử lý và lưu file ở đây
                const imageUrl = `http://denlongthiendang.com/uploads/${req.file.originalname}`;

                // Trả về URL của file
                res.status(200).json({ filePath: imageUrl });
            });
        } else {
            res.setHeader('Allow', ['POST']);
            res.status(405).end(`Method ${req.method} Not Allowed`);
        }
    });
};

export const config = {
    api: {
        bodyParser: false, // Tắt bodyParser để multer xử lý
    },
};

export default handler;

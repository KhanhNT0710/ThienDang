// /pages/api/upload.js
import multer from 'multer';
import fs from 'fs';
import path from 'path';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});

const upload = multer({ storage: storage });

export const config = {
    api: {
        bodyParser: false,
    },
};

const handler = (req, res) => {
    if (req.method === 'POST') {
        upload.single('file')(req, res, (err) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            const imageUrl = `https://denlongthiendang.com/uploads/${req.file.filename}`;
            res.status(200).json({ filePath: imageUrl });
        });
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
};

export default handler;

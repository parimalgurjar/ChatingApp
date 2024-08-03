import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME || 'defaultUsername';
const PASSWORD = process.env.DB_PASSWORD || 'defaultPassword';

const storage = new GridFsStorage({
    url: `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.s1p1uwt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`,
    options: { useNewUrlParser: true, useUnifiedTopology: true },
    file: (request, file) => {
        const match = ['image/png', 'image/jpg'];
        if (match.indexOf(file.mimetype) === -1) {
            return {
                filename: `${Date.now()}-file-${file.originalname}`
            };
        }

        return {
            bucketName: 'photos',
            filename: `${Date.now()}-file-${file.originalname}`
        };
    }
});

const upload = multer({ storage });

export default upload;

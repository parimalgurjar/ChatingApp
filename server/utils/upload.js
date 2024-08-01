import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME || 'defaultUsername';
const PASSWORD = process.env.DB_PASSWORD || 'defaultPassword';

/*const URL = `mongodb+srv://${USERNAME}:${PASSWORD}@whatsappclone.vln2tdj.mongodb.net/`;

const conn = mongoose.createConnection(URL, {
    
});

let gridFsBucket;

conn.once('open', () => {
    gridFsBucket = new mongodb.GridFSBucket(conn.db, {
        bucketName: 'fs'
    });
});
*/

const storage = new GridFsStorage({
    url:`mongodb+srv://${USERNAME}:${PASSWORD}@whatsappclone.vln2tdj.mongodb.net/`,
    options:{ useNewUrlParser: true,
        useUnifiedTopology: true },
    file: (request, file) => {
        const match = ['image/png', 'image/jpg'];
        if (match.indexOf(file.mimetype) === -1) {
            return {
                //bucketName: 'fs',
                filename: `${Date.now()}-file-${file.originalname}`
            };
        }

        return {
            bucketName: 'photos',
            filename: `${Date.now()}-file-${file.originalname}`
        };
    }
});

export default multer({ storage });


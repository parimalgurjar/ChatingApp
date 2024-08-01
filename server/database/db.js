import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME || 'yourDatabaseName';

// Set the strictQuery option
mongoose.set('strictQuery', false);

const URL = `mongodb+srv://${USERNAME}:${PASSWORD}@whatsappclone.vln2tdj.mongodb.net/${DB_NAME}`;

const Connection = async () => {
    try {
        await mongoose.connect(URL);
        console.log("Database connected");
    } catch (err) {
        console.error("Database connection error:", err.message);
    }
};

export default Connection;

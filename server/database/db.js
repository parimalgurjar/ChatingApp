import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

// Set the strictQuery option
mongoose.set('strictQuery', false);

const URL = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.s1p1uwt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const Connection = async () => {
    try {
        await mongoose.connect(URL);
        console.log("Database connected");
    } catch (err) {
        console.error("Database connection error:", err.message);
    }
};

export default Connection;

import express from 'express';
import router from './routes';
import dotenv from "dotenv";
import mongoose from 'mongoose';

dotenv.config();

async function start() {
    const app = express();
    const port = process.env.APP_PORT ?? 4000;
    const mongoUrl = process.env.MONGO_URL ?? "";
    const database = process.env.DB_NAME ?? "";

    app.use(express.json());
    app.use("/api", router);

    mongoose.connect(mongoUrl, {
        dbName: database
    }).then((response) => {
        console.log("Mongo connected");
    })
    
    app.listen(port, () => {
        console.log(`Server in: http://localhost:${port}`);
    });
}

start();
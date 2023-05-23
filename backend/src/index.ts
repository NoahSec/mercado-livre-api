import express from 'express';
import router from './routes';
import dotenv from "dotenv";

async function start() {
    const app = express();
    dotenv.config();

    app.use(express.json());
    app.use(router);

    let port = process.env.APP_PORT;

    app.listen(port, () => {
        console.log(`Server in: http://localhost:${port}`);
    });
}

start();
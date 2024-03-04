import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import DbConnection from "./databse/DbConnection.js";
import { errorMiddleware } from './error/error.js'
import reservationRoutes from "./routes/reservationRoutes.js";

dotenv.config({ path: './config/.env' });

const app = express();

app.use(cors({
    origin: [process.env.FRONT_URL],
    methods: ["POST"],
    credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/reservation', reservationRoutes)

// Call the function to establish database connection
DbConnection();

app.use(errorMiddleware)

export default app;

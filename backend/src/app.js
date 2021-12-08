import express from "express";
import cors from 'cors';
import helmet from "helmet";
import tableRouter from './routes/table-route.js';

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true}))
app.use(helmet());
app.use(cors());

// Routes
app.use('/api', tableRouter);

app.use(async function (request, response) {
    response.status(404).json({
        error: "Non-existent Waypoint"
    });
});

export default app;
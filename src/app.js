import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";

const app = express();

app.use(helmet());
app.use(cors());

app.use(rateLimit({
    windowMs: 15 * 60 * 100,
    limit: 100,
}))
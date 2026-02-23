import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import { errorHandler } from "./middlewares/error.middleware";

const app = express();

app.use(helmet());
app.use(cors());
app.use(errorHandler);

app.use(rateLimit({
    windowMs: 15 * 60 * 100,
    limit: 100,
}))

app.use(express.json());

app.get("/", (req, res) => {
    res.json({message: "Flight booking running API running successfully."})
})

export default app;
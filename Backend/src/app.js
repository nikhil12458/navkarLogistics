import express from "express";
import cors from "cors";
import morgan from "morgan";
import { config } from "./config/config.js";
import leadRoutes from "./router/lead.routes.js"

const app = express();

app.set("trust proxy", 1);
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: [
      "https://navkar-logistics-iota.vercel.app",
      "http://localhost:5173",
      "http://localhost:3000",
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
    maxAge: 86400,
  }),
);

app.use("/api/leads", leadRoutes)

export default app;

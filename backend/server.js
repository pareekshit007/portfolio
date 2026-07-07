import "dotenv/config";
import express from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";
import contactRouter from "./routes/contact.js";
import { connectDB } from "./config/db.js";

const app = express();
const PORT = process.env.PORT || 5000;

await connectDB();

const allowedOrigins = (process.env.CORS_ORIGIN || "http://localhost:5173").split(",");

app.use(cors({ origin: allowedOrigins }));
app.use(express.json({ limit: "50kb" }));

// Limit the contact form to 5 submissions per 15 minutes per IP,
// to keep the mailbox (and inbound email quota) from being spammed.
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Too many messages sent. Please try again later." },
});

app.get("/", (req, res) => {
  res.json({ status: "ok", service: "portfolio-backend" });
});

app.use("/api", contactLimiter, contactRouter);

app.use((req, res) => {
  res.status(404).json({ error: "Not found" });
});

app.listen(PORT, () => {
  console.log(`Portfolio backend running on http://localhost:${PORT}`);
});
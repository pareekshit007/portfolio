import { Router } from "express";
import { sendContactEmail } from "../utils/mailer.js";
import { isDbConnected } from "../config/db.js";
import Message from "../models/Message.js";

const router = Router();

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

router.post("/contact", async (req, res) => {
  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Name, email, and message are all required." });
  }
  if (typeof name !== "string" || name.trim().length < 2 || name.length > 100) {
    return res.status(400).json({ error: "Please enter a valid name." });
  }
  if (typeof email !== "string" || !EMAIL_RE.test(email)) {
    return res.status(400).json({ error: "Please enter a valid email address." });
  }
  if (typeof message !== "string" || message.trim().length < 10 || message.length > 5000) {
    return res.status(400).json({ error: "Message should be at least 10 characters." });
  }

  const clean = { name: name.trim(), email: email.trim(), message: message.trim() };

  if (isDbConnected()) {
    try {
      await Message.create(clean);
    } catch (err) {
      console.error("Failed to save message to database:", err);
    }
  }

  try {
    await sendContactEmail(clean);
    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Failed to send contact email:", err);
    if (isDbConnected()) {
      return res.status(200).json({
        success: true,
        warning: "Saved, but the email notification failed — check the server logs.",
      });
    }
    return res.status(500).json({ error: "Failed to send message. Please try again later." });
  }
});

router.get("/messages", async (req, res) => {
  if (!isDbConnected()) {
    return res.status(503).json({ error: "Database not connected." });
  }
  try {
    const messages = await Message.find().sort({ createdAt: -1 }).limit(200);
    return res.json({ messages });
  } catch (err) {
    console.error("Failed to fetch messages:", err);
    return res.status(500).json({ error: "Failed to fetch messages." });
  }
});

export default router;
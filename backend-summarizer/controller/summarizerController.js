// controllers/summarizeController.js
import { summarizeText } from "../summarizer.js";

export const summarizeHandler = async (req, res) => {
  try {
    const { text } = req.body;
    if (!text) {
      return res.status(400).json({ error: "No text provided" });
    }

    const summary = await summarizeText(text);
    res.json({ summary });
  } catch (error) {
    console.error("Summarization error:", error);
    res.status(500).json({ error: "Summarization failed" });
  }
};

// routes/summarizeRoutes.js
import express from "express";
import { summarizeHandler } from "../controller/summarizerController.js";

const router = express.Router();

router.post("/summarize", summarizeHandler);

export default router;

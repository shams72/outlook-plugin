import express from "express";
import cors from "cors";
import summarizeRoutes from "./router/summarizerRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", summarizeRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

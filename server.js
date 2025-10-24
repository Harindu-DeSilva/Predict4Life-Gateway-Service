import express from "express";
import cors from "cors";
import { config } from "./config.js";
import authRoutes from "./src/routes/authRoutes.js";
import mlRoutes from "./src/routes/mlRoutes.js";
import donorRoutes from "./src/routes/donorRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/ml", mlRoutes);
app.use("/api/donors", donorRoutes);

app.get("/", (req, res) => res.send("Gateway Service running 🚀"));

app.listen(config.port, () => {
  console.log(`🚀 Gateway running on port ${config.port}`);
});

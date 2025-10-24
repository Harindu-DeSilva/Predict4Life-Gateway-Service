// src/routes/donorRoutes.js
import express from "express";
import { getAllDonors, getDonorById } from "../controllers/donorController.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.get("/", verifyToken, getAllDonors);
router.get("/:id", verifyToken, getDonorById);

export default router;

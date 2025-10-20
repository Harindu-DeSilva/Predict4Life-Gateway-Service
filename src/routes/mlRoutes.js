import express from "express";
import {
  predictUsage,
  predictCollection,
  predictWastage,
  predictCamp
} from "../controllers/mlController.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.post("/usage", verifyToken, predictUsage);
router.post("/collection", verifyToken, predictCollection);
router.post("/wastage", verifyToken, predictWastage);
router.post("/camp", verifyToken, predictCamp);

export default router;

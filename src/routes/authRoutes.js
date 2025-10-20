import express from "express";
import axios from "axios";
import { config } from "../../config.js";

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const { data } = await axios.post(`${config.authServiceUrl}/api/auth/register`, req.body);
    res.json(data);
  } catch (err) {
    res.status(err.response?.status || 500).json(err.response?.data || { error: "Auth service error" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { data } = await axios.post(`${config.authServiceUrl}/api/auth/login`, req.body);
    res.json(data);
  } catch (err) {
    res.status(err.response?.status || 500).json(err.response?.data || { error: "Auth service error" });
  }
});

export default router;

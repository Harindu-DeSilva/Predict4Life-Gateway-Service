import { mlClient } from "../utils/apiClient.js";

export const predictUsage = async (req, res) => {
  try {
    const { data } = await mlClient.post("/predict/usage", req.body);
    res.json(data);
  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).json({ error: "ML prediction failed" });
  }
};

export const predictCollection = async (req, res) => {
  try {
    const { data } = await mlClient.post("/predict/collection", req.body);
    res.json(data);
  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).json({ error: "ML prediction failed" });
  }
};

export const predictWastage = async (req, res) => {
  try {
    const { data } = await mlClient.post("/predict/wastage", req.body);
    res.json(data);
  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).json({ error: "ML prediction failed" });
  }
};

export const predictCamp = async (req, res) => {
  try {
    const { data } = await mlClient.post("/predict/camp", req.body);
    res.json(data);
  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).json({ error: "ML prediction failed" });
  }
};

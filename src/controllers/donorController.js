import { donorClient } from "../utils/apiClient.js";

export const getAllDonors = async (req, res) => {
  try {
    // add /api prefix
    const { data } = await donorClient.get("/api/donors");
    res.json(data);
  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).json({ error: "Failed to fetch donors" });
  }
};

export const getDonorById = async (req, res) => {
  try {
    const { id } = req.params;
    const { data } = await donorClient.get(`/api/donors/${id}`);
    res.json(data);
  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).json({ error: "Failed to fetch donor by ID" });
  }
};

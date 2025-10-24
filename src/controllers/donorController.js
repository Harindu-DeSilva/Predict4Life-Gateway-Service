import { donorClient } from "../utils/apiClient.js";

export const getAllDonors = async (req, res) => {
  try {
    // add /api prefix
    const { data } = await donorClient.get("/");
    res.json(data);
  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).json({ error: "Failed to fetch donors" });
  }
};

export const getDonorById = async (req, res) => {
  try {
    const { id } = req.params;
    const { data } = await donorClient.get(`/${id}`);
    res.json(data);
  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).json({ error: "Failed to fetch donor by ID" });
  }
};

// controllers/mlController.js
import axios from "axios";
import { config } from "../../config.js";

const ML_BASE_URL = config.mlServiceUrl;

// ------------------ BLOOD USAGE FORECAST ------------------
export const predictUsage = async (req, res) => {
  try {
    const { blood_group, data } = req.body;

    if (!blood_group || !data) {
      return res.status(400).json({ error: "Missing 'blood_group' or 'data' field" });
    }

    const response = await axios.post(
      `${ML_BASE_URL}/predict/forecast_usage/${blood_group}`,
      { data }
    );

    return res.status(200).json(response.data);
  } catch (err) {
    console.error("❌ Error in predictUsage:", err.response?.data || err.message);
    return res.status(err.response?.status || 500).json({
      error: err.response?.data || "Internal server error",
    });
  }
};

// ------------------ BLOOD COLLECTION ------------------
export const predictCollection = async (req, res) => {
  try {
    const response = await axios.post(
      `${ML_BASE_URL}/predict/gradientboosting_blood_collection`,
      { data: req.body.data }
    );
    res.status(200).json(response.data);
  } catch (err) {
    console.error("❌ Error in predictCollection:", err.response?.data || err.message);
    res.status(err.response?.status || 500).json({
      error: err.response?.data || "Internal server error",
    });
  }
};

// ------------------ BLOOD WASTAGE ------------------
export const predictWastage = async (req, res) => {
  try {
    const response = await axios.post(
      `${ML_BASE_URL}/predict/randomforest_blood_wastage`,
      { data: req.body.data }
    );
    res.status(200).json(response.data);
  } catch (err) {
    console.error("❌ Error in predictWastage:", err.response?.data || err.message);
    res.status(err.response?.status || 500).json({
      error: err.response?.data || "Internal server error",
    });
  }
};

// ------------------ BLOOD CAMP ------------------
export const predictCamp = async (req, res) => {
  try {
    const response = await axios.post(
      `${ML_BASE_URL}/predict/linearregression_blood_camp`,
      { data: req.body.data }
    );
    res.status(200).json(response.data);
  } catch (err) {
    console.error("❌ Error in predictCamp:", err.response?.data || err.message);
    res.status(err.response?.status || 500).json({
      error: err.response?.data || "Internal server error",
    });
  }
};


export const predictBloodUsage = async (req, res) => {
  try {
    const response = await axios.post(
      `${ML_BASE_URL}/predict/linearregression_blood_usage`,
      { data: req.body.data }
    );
    res.status(200).json(response.data);
  } catch (err) {
    console.error("❌ Error in predictBloodUsage:", err.response?.data || err.message);
    res.status(err.response?.status || 500).json({
      error: err.response?.data || "Internal server error",
    });
  }
};

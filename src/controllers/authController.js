import { authClient } from "../utils/apiClient.js";

export const registerUser = async (req, res) => {
  try {
    const { data } = await authClient.post("/register", req.body);
    res.json(data);
  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).json({ error: "Failed to register user" });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { data } = await authClient.post("/login", req.body);
    res.json(data);
  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).json({ error: "Login failed" });
  }
};

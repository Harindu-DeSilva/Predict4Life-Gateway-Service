import axios from "axios";
import { config } from "../../config.js";

// ML service client
export const mlClient = axios.create({
  baseURL: config.mlServiceUrl,
  timeout: 5000,
});

// Auth service client (optional if needed)
export const authClient = axios.create({
  baseURL: config.authServiceUrl,
  timeout: 5000,
});

import dotenv from "dotenv";
dotenv.config();

export const config = {
  port: process.env.PORT || 8080,
  authServiceUrl: process.env.AUTH_SERVICE_URL || "http://localhost:5000",
  mlServiceUrl: process.env.ML_SERVICE_URL || "http://localhost:8000",
  donorServiceUrl: process.env.DONOR_SERVICE_URL || "predict4-life-donor-service.vercel.app",
  jwtSecret: process.env.JWT_SECRET || "supersecret123",
};

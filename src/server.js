import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import studentRoutes from "./routes/studentRoutes.js";
import { swaggerDocs } from "./swagger.js";

dotenv.config();
const app = express();

// 1. Kết nối MongoDB Atlas
connectDB();

// 2. Middleware đọc JSON
app.use(express.json());

// 3. Routes
app.use("/api/students", studentRoutes);

// 4. Swagger
swaggerDocs(app);

// 5. Listen
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Server đang chạy tại http://localhost:${PORT}`);
});

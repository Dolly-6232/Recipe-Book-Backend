import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import connectDB from "./src/config/db.js";
import authRoutes from "./src/routes/authRoutes.js";
import recipeRoutes from "./src/routes/recipeRoutes.js";
console.log("Starting server...");
console.log("Auth routes imported:", !!authRoutes);
console.log("Recipe routes imported:", !!recipeRoutes);
dotenv.config();
const app = express();
// Create uploads directory if it doesn't exist
import fs from 'fs';
const uploadDir = path.join(process.cwd(), 'uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}
connectDB();
app.use(cors({
    origin: '*'
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
// Serve uploaded files
app.use('/uploads', express.static(uploadDir));
app.use((req, res, next) => {
    console.log(`Incoming request: ${req.method} ${req.url}`);
    console.log(`Content-Type: ${req.headers['content-type']}`);
    next();
});
app.use("/api/auth", authRoutes);
app.use("/api/recipes", recipeRoutes);
// Health check route
app.get("/", (req, res) => {
    res.json({ status: "ok", message: "Server is running" });
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}).on('error', (err) => {
    console.error("Server error:", err);
});
//# sourceMappingURL=server.js.map
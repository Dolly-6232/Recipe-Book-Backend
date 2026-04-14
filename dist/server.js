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
if (!fs.existsSync('uploads')) {
    fs.mkdirSync('uploads');
}
connectDB();
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
// Serve uploaded files
app.use('/uploads', express.static('uploads'));
app.use((req, res, next) => {
    console.log(`Incoming request: ${req.method} ${req.url}`);
    console.log(`Content-Type: ${req.headers['content-type']}`);
    next();
});
app.use("/api/auth", authRoutes);
app.use("/api/recipes", recipeRoutes);
app.listen(process.env.PORT, () => {
    console.log("Server running");
});
//# sourceMappingURL=server.js.map
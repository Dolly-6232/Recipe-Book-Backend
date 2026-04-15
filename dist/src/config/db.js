import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB Connected");
    }
    catch (error) {
        console.error("MongoDB Connection Error:", error);
        // Don't throw error to allow server to start even if DB fails
        // Render will retry the connection
    }
};
export default connectDB;
//# sourceMappingURL=db.js.map
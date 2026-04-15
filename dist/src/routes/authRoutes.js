import express from "express";
import { auth } from "../middleware/authMiddleware.js";
import { signup, login, getCurrentUser, updateProfile } from "../controllers/authController.js";
import upload from "../config/multer.js";
const router = express.Router();
router.post("/signup", upload.single('profileImage'), (req, res, next) => {
    console.log('File received:', req.file);
    console.log('Body after multer:', req.body);
    signup(req, res);
});
router.post("/login", login);
router.get("/profile", auth, getCurrentUser);
router.patch("/update-profile", auth, upload.single('profileImage'), updateProfile);
export default router;
//# sourceMappingURL=authRoutes.js.map
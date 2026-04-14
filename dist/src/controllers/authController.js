import bcrypt from "bcryptjs";
import User from "../models/User.js";
import { generateToken } from "../utills/generateToken.js";
export const signup = async (req, res) => {
    try {
        let name, email, password, profileImage;
        // Handle JSON body
        if (req.body && typeof req.body === 'object') {
            name = req.body.name;
            email = req.body.email;
            password = req.body.password;
            profileImage = req.body.profileImage;
        }
        else {
            return res.status(400).json({
                error: "Invalid request format - expected JSON",
                contentType: req.headers['content-type'],
                help: "Make sure Content-Type is application/json and body is valid JSON"
            });
        }
        if (!name || !email || !password) {
            return res.status(400).json({
                error: "Missing required fields"
            });
        }
        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                error: "E11000 duplicate key error collection: recipeapp.users index: email_1 dup key: { email: \"dolly@gmail.com\" }"
            });
        }
        const hash = await bcrypt.hash(password, 10);
        const user = await User.create({
            name,
            email,
            password: hash,
            profileImage
        });
        res.json({
            user,
            token: generateToken(user._id.toString())
        });
    }
    catch (error) {
        console.error("Signup error:", error);
        res.status(500).json({
            error: "Server error",
            message: error.message
        });
    }
};
export const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user)
        return res.status(400).json("User not found");
    const match = await bcrypt.compare(password, user.password);
    if (!match)
        return res.status(400).json("Invalid password");
    res.json({
        user,
        token: generateToken(user._id.toString())
    });
};
export const getCurrentUser = async (req, res) => {
    try {
        // Fetch full user data from database
        const user = await User.findById(req.user.id).select('-password');
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        res.json(user);
    }
    catch (error) {
        console.error("Get user error:", error);
        res.status(500).json({ error: "Server error" });
    }
};
export const updateProfile = async (req, res) => {
    const user = await User.findById(req.user._id);
    res.json(user);
};
//# sourceMappingURL=authController.js.map
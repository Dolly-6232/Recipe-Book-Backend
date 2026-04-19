import console from "console";
import Recipe from "../models/Recipe.js";
import User from "../models/User.js";
import { uploadToCloudinary } from "../utills/cloudinaryUpload.js";
export const createRecipe = async (req, res) => {
    console.log("=== CREATE RECIPE CALLED - NEW CODE ===");
    try {
        console.log("Request body:", req.body);
        console.log("Uploaded file:", req.file);
        console.log("User from auth middleware:", req.user);
        console.log("User ID:", req.user?.id);
        if (!req.user || !req.user.id) {
            console.log("No user found in request - auth middleware failed");
            return res.status(401).json({ error: "User not authenticated" });
        }
        let imageUrl = null;
        if (req.file) {
            console.log("File details:", {
                originalname: req.file.originalname,
                mimetype: req.file.mimetype,
                size: req.file.size,
                hasBuffer: !!req.file.buffer,
                hasPath: !!req.file.path
            });
            imageUrl = await uploadToCloudinary(req.file, "recipe-images");
            console.log("Cloudinary upload successful:", imageUrl);
        }
        else {
            console.log("No file in request");
        }
        const recipe = await Recipe.create({
            image: imageUrl,
            title: req.body.title,
            ingredients: req.body.ingredients,
            instructions: req.body.instructions,
            createdBy: req.user.id
        });
        res.json(recipe);
    }
    catch (error) {
        console.error("Error creating recipe:", error);
        res.status(500).json({
            error: "Server error",
            message: error.message
        });
    }
};
export const getRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.find().populate("createdBy", "name");
        res.json(recipes);
        console.log('ppppp', recipes);
    }
    catch (error) {
        console.error("Error getting recipes:", error);
        res.status(500).json({
            error: "Server error",
            message: error.message
        });
    }
};
export const addFavorite = async (req, res) => {
    try {
        const recipeId = req.params.id;
        const userId = req.user.id;
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        if (user.favorites.includes(recipeId)) {
            return res.status(400).json({
                message: "Recipe already in favorites"
            });
        }
        user.favorites.push(recipeId);
        await user.save();
        res.json({
            message: "Recipe added to favorites",
            favorites: user.favorites
        });
    }
    catch (error) {
        res.status(500).json({
            error: "Server error"
        });
    }
};
export const removeFavorite = async (req, res) => {
    try {
        const recipeId = req.params.id;
        const userId = req.user.id;
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        user.favorites = user.favorites.filter((id) => id.toString() !== recipeId);
        await user.save();
        res.json({
            message: "Recipe removed from favorites",
            favorites: user.favorites
        });
    }
    catch (error) {
        res.status(500).json({
            error: "Server error"
        });
    }
};
export const getFavorites = async (req, res) => {
    try {
        const user = await User.findById(req.user.id)
            .populate("favorites");
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        res.json(user.favorites);
    }
    catch (error) {
        res.status(500).json({
            error: "Server error"
        });
    }
};
//# sourceMappingURL=recipeController.js.map
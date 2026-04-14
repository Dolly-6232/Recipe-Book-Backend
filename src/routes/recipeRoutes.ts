import express from "express"
import { auth } from "../middleware/authMiddleware.js"
import { createRecipe, getRecipes, getFavorites, addFavorite, removeFavorite } from "../controllers/recipeController.js"
import upload from "../config/multer.js"

console.log("Recipe routes file loaded!")

const router = express.Router()

console.log("Recipe router created!")

// Add debugging middleware
router.use((req, res, next) => {
    console.log(`Recipe route hit: ${req.method} ${req.originalUrl}`)
    next()
})

// Recipe routes - parameter routes first
router.post("/favorite/:id", auth, addFavorite)
router.delete("/favorite/:id", auth, removeFavorite)
router.get("/favorites", auth, getFavorites)
// Static routes last (public routes without auth)
router.get("/", getRecipes)
router.post("/", auth, upload.single("image"), createRecipe)

export default router
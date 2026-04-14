import mongoose from "mongoose"

const recipeSchema = new mongoose.Schema({

    title: String,

    ingredients: [String],

    instructions: String,

    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    image: String,

}, { timestamps: true })

export default mongoose.model("Recipe", recipeSchema)
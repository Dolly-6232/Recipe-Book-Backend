import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    profileImage: {
        type: String,
        default: ""
    },
    favorites: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Recipe"
        }
    ]
}, {
    timestamps: true
})

export default mongoose.model("User", userSchema)
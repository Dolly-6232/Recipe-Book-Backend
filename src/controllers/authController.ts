import bcrypt from "bcryptjs"
import User from "../models/User.js"
import { generateToken } from "../utills/generateToken.js";
import { uploadToCloudinary } from "../utills/cloudinaryUpload.js";

export const signup = async (req: any, res: any) => {
    try {
        console.log("=== SIGNUP REQUEST START ===")
        console.log("Request body keys:", Object.keys(req.body))
        console.log("Request file:", req.file)
        console.log("Request body:", req.body)

        const { name, email, password } = req.body
        let profileImage = ""

        if (req.file) {
            profileImage = await uploadToCloudinary(req.file, "profile-images")
            console.log("Cloudinary upload successful:", profileImage)
        }

        console.log("Signup data received:", { name, email, profileImage: profileImage ? "present" : "missing", profileImagePath: profileImage });

        if (!name || !email || !password) {
            return res.status(400).json({
                error: "Missing required fields"
            })
        }

        // Check if user already exists
        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return res.status(400).json({
                error: "User already exists"
            })
        }

        const hash = await bcrypt.hash(password, 10)

        const user = await User.create({
            name,
            email,
            password: hash,
            profileImage
        })

        // Return user without password
        const userWithoutPassword = await User.findById(user._id).select('-password')

        res.json({
            user: userWithoutPassword,
            token: generateToken(user._id.toString())
        })

    } catch (error: any) {
        console.error("Signup error:", error)
        res.status(500).json({
            error: "Server error",
            message: error.message
        })
    }
}

export const login = async (req: any, res: any) => {

    const { email, password } = req.body

    const user: any = await User.findOne({ email })

    if (!user) return res.status(400).json("User not found")

    const match = await bcrypt.compare(password, user.password)

    if (!match) return res.status(400).json("Invalid password")

    res.json({
        user,
        token: generateToken(user._id.toString())
    })

}
export const getCurrentUser = async (req: any, res: any) => {
    try {
        console.log("Getting user with ID:", req.user.id)
        // Fetch full user data from database
        const user = await User.findById(req.user.id).select('-password')
        if (!user) {
            return res.status(404).json({ error: "User not found" })
        }
        console.log("Found user:", { name: user.name, email: user.email, hasProfileImage: !!user.profileImage })
        res.json(user)
    } catch (error: any) {
        console.error("Get user error:", error)
        res.status(500).json({ error: "Server error" })
    }
}
export const updateProfile = async (req: any, res: any) => {
    try {
        const { name, email } = req.body
        let profileImage = undefined

        if (req.file) {
            profileImage = await uploadToCloudinary(req.file, "profile-images")
        }

        const user = await User.findById(req.user.id)
        if (!user) {
            return res.status(404).json({ error: "User not found" })
        }

        // Update user fields
        if (name) user.name = name
        if (email) user.email = email
        if (profileImage) user.profileImage = profileImage

        await user.save()

        // Return updated user without password
        const updatedUser = await User.findById(req.user.id).select('-password')
        res.json(updatedUser)
    } catch (error: any) {
        console.error("Update profile error:", error)
        res.status(500).json({ error: "Server error" })
    }
}

import jwt from "jsonwebtoken";
export const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });
};
//# sourceMappingURL=generateToken.js.map
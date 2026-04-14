import jwt from "jsonwebtoken";
export const auth = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token)
        return res.status(401).json("No token");
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // Set user with both id and _id for consistency
    req.user = {
        id: decoded.id,
        _id: decoded.id
    };
    next();
};
//# sourceMappingURL=authMiddleware.js.map
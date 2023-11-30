const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    const header = req.headers.authorization;

    if (!header) {
        return res.status(401).json({
            status: 401,
            message: "Undefined header",
        });
    }

    const tokenArray = header.split(" ");

    if (tokenArray.length !== 2 || tokenArray[0] !== "Bearer") {
        return res.status(401).json({
            status: 401,
            message: "Invalid token format",
        });
    }

    const token = tokenArray[1];

    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        req.payload = payload;
        next();
    } catch (error) {
        if (error instanceof jwt.JsonWebTokenError) {
            return res.status(401).json({
                status: 401,
                message: "Invalid token",
            });
        } else if (error instanceof jwt.TokenExpiredError) {
            return res.status(401).json({
                status: 401,
                message: "Token expired",
            });
        } else {
            return res.status(500).json({
                status: 500,
                message: "Internal server error",
            });
        }
    }
};

const verifyRoleAdmin = (req, res, next) => {
    const { role } = req.payload;
    if (role == 1) {
        next();
    } else {
        return res.status(401).json({
            status: 401,
            message: "Anda tidak bisa mengakses api ini",
        });
    }
};

const verifyRoleUser = (req, res, next) => {
    const { role } = req.payload;
    if (role == 0) {
        next();
    } else {
        return res.status(401).json({
            status: 401,
            message: "Anda tidak bisa mengakses api ini",
        });
    }
};

module.exports = { verifyRoleAdmin, verifyRoleUser, verifyToken };

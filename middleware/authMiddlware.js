const jwt = require("jsonwebtoken");
const verifyToken = (req, res, next) => {
    const token = req.headers.authorization;

    if(!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    jwt.verify(token, 'e77d7a7b8bde0b3cf4513dA', (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Invalid Token' });
        }

        req.userId = decoded.userId;
        next();
    });
};

module.exports = verifyToken;
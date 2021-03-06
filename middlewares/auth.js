const jwt = require("jsonwebtoken");
const { jwtKey } = require("../config/keys");

module.exports = function(req, res, next) {
  const token = req.header("token");
  if (!token) return res.status(401).json({ message: "Authorization Error" });

  try {
    const decoded = jwt.verify(token, jwtKey);
    req.user = decoded.user;
    next();
  } catch (e) {
    console.error(e);
    res.status(500).send({ message: "Invalid Token" });
  }
};

// works as JWT authentication in headers
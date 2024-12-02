import jwt from "jsonwebtoken";

const authenticateToken = (req, res, next) => {
    const token = req.cookies.authToken

    console.log(token)

  if (!token) return res.status(401).send("Access Denied");

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).send("Invalid Token");
    req.user = user; // Attach user to the request object
    next();
  });
};

export default authenticateToken;
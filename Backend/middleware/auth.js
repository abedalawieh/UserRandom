import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const verifyToken = (req, res, next) => {
  const token =
    req.body.token || req.query.token || req.headers["authorization"];

  if (!token) {
    return res.status(403).send({ message: "No token provided" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JSON_SECRET);
    req.id = decoded.id;
  } catch (e) {
    return res.status(401).send(e.message);
  }
  return next();
};
export default verifyToken;

import jwt from "jsonwebtoken";
import HttpError from "../models/http-error.js";

const jwt_key = process.env.JWT_KEY;

export const checkAuth = (req, res, next) => {
  if(req.method === "OPTIONS"){
    return next();
  }

  try {
    const token = req.headers.authorization.split(" ")[1]; // Autorization 'Bearer TOKEN'
    if (!token) {
      throw new Error("Authentication failed!");
    }
    const decodedToken = jwt.verify(token, jwt_key);

    req.userData = { userId: decodedToken.userId };
    next();
  } catch (err) {
    const error = new HttpError("Authentication failed!", 403);
    return next(error);
  }
};
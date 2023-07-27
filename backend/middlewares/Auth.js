import { Customer } from "../models/cutomer.js";
import { Vender } from "../models/vender.js";
import ErrorHandler from "../utils/errorHandler.js";
import jwt from "jsonwebtoken";

export const isAuthenticated = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return next(new ErrorHandler(`login first`, 404));
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRATE);

  req.user =
    (await Customer.findById(decoded._id)) ||
    (await Vender.findById(decoded._id));
  next();
};

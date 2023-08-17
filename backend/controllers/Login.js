import { catchAsyncError } from "../middlewares/CatchAsyncError.js";
import { Customer } from "../models/cutomer.js";
import { Vender } from "../models/vender.js";
import ErrorHandler from "../utils/errorHandler.js";
import bcrypt from "bcrypt";
import { sendCookie } from "../utils/feature.js";

export const login = catchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;

  let user =
    (await Customer.findOne({ email }).select("+password")) ||
    (await Vender.findOne({ email }).select("+password"));
  console.log(user);
  if (!user)
    return next(new ErrorHandler(`username and password are incorrect`, 404));

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch)
    return next(new ErrorHandler(`username and password are incorrect`, 404));

  console.log("2");
  sendCookie(user, res, `Welcome back ${user.name} `, 200);
  console.log("3");
});

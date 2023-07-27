import { User } from "../models/user.js";
import bcrypt from "bcrypt";
import { sendCookie } from "../utils/feature.js";
import ErrorHandler from "../utils/errorHandler.js";
import { catchAsyncError } from "../middlewares/CatchAsyncError.js";

//Rgister code
export const register = catchAsyncError(async (req, res, next) => {
  const { name, email, password } = req.body;

  let user = await User.findOne({ email });

  if (user)
    return next(new ErrorHandler("This email is already registered.", "400"));

  const hashedPassword = await bcrypt.hash(password, 10);

  user = await User.create({ name, email, password: hashedPassword });

  sendCookie(user, res, `Registed successfully`, 200);
});

//login controler

export const login = catchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;

  let user = await User.findOne({ email }).select("+password");
  if (!user)
    return next(new ErrorHandler(`username and password are incorrect`, 404));

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch)
    return next(new ErrorHandler(`username and password are incorrect`, 404));

  sendCookie(user, res, `Welcome back ${user.name} `, 200);
});

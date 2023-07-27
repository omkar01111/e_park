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

export const addDetails = catchAsyncError(async (req, res, next) => {
  const {
    name,
    gender,
    address,
    mobileNo,
    drivingLicenceNo,
    image,
    birthdate,
  } = req.body;

  await User.updateMany({
    name,
    gender,
    address,
    mobileNo,
    drivingLicenceNo,
    image,
    birthdate,
  });

  res.status(200).json({
    success: true,
    message: "User successfully updated",
  });
});

//Get user details

export const userDetails = catchAsyncError(async (req, res) => {
  res.status(200).json({
    success: true,
    user: req.user,
  });
});

export const deactivateAccount = catchAsyncError(async (req, res) => {
  const { id, name } = req.user;
  await User.findByIdAndDelete(id);
  res
    .status(200)
    .json({
      success: true,
      message: `${name} Your Account Has Been Deactivated`,
    });
});

//logout controler

export const logout = catchAsyncError(async (req, res) => {
  res
    .status(200)
    .cookie("token", "", {
      expiers: new Date(Date.now()),
      sameSite: process.env.NODE_ENV === "Development" ? "lax" : "none",
      secure: process.env.NODE_ENV === "Development" ? false : true,
    })
    .json({
      success: true,
      message: "logout successfully",
    });
});

import { Vender } from "../models/vender.js";
import bcrypt from "bcrypt";
import { sendCookie } from "../utils/feature.js";
import ErrorHandler from "../utils/errorHandler.js";
import { catchAsyncError } from "../middlewares/CatchAsyncError.js";
import { Customer } from "../models/cutomer.js";

//Rgister code
export const register_V = catchAsyncError(async (req, res, next) => {
  const { name, email, password } = req.body;

  let user =
    (await Vender.findOne({ email })) || (await Customer.findOne({ email }));

  if (user)
    return next(new ErrorHandler("This email is already registered.", "400"));

  const hashedPassword = await bcrypt.hash(password, 10);

  user = await Vender.create({ name, email, password: hashedPassword });

  sendCookie(user, res, `Registed successfully`, 200);
});

//login controler

export const login_V = catchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;

  let user = await Vender.findOne({ email }).select("+password");
  if (!user)
    return next(new ErrorHandler(`username and password are incorrect`, 404));

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch)
    return next(new ErrorHandler(`username and password are incorrect`, 404));

  sendCookie(user, res, `Welcome back ${user.name} `, 200);
});

export const addDetails_V = catchAsyncError(async (req, res, next) => {
  const { name, gender, address, mobileNo, addharNo, image, birthdate, panNo } =
    req.body;

  await Vender.updateMany({
    name,
    gender,
    address,
    mobileNo,
    addharNo,
    image,
    birthdate,
    panNo,
  });

  res.status(200).json({
    success: true,
    message: "User successfully updated",
  });
});

//Get user details

export const userDetails_V = catchAsyncError(async (req, res) => {
  res.status(200).json({
    success: true,
    user: req.user,
  });
});

export const deactivateAccount_V = catchAsyncError(async (req, res) => {
  const { id, name } = req.user;
  await Vender.findByIdAndDelete(id);
  res.status(200).json({
    success: true,
    message: `${name} Your Account Has Been Deactivated`,
  });
});

//logout controler

export const logout_V = catchAsyncError(async (req, res) => {
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

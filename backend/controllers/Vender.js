import { Vender } from "../models/vender.js";
import { catchAsyncError } from "../middlewares/CatchAsyncError.js";
import { Customer } from "../models/cutomer.js";
import {
  deactivateUser,
  getUserDetails,
  loginUser,
  registerUser,
} from "../utils/authUtils.js";

//Rgister code
export const registerVender = catchAsyncError(async (req, res, next) => {
  await registerUser(req, res, next, Vender, Customer);
});

//login controler

export const loginVender = catchAsyncError(async (req, res, next) => {
  await loginUser(req, res, next, Vender);
});

export const completeVenderDetails = catchAsyncError(async (req, res, next) => {
  const { companyName, address, mobileNo, gstNumber, image } = req.body;
  const userId = req.user._id; // Assuming you have the user ID available in the req.user object

  const updatedVender = await Vender.findByIdAndUpdate(
    userId,
    { companyName, address, mobileNo, gstNumber, image },
    { new: true }
  );

  res.status(200).json({
    success: true,
    message: "Vender details updated successfully",
    user: updatedVender,
  });
});

//Get user details

export const getVenderDetails = catchAsyncError(async (req, res) => {
  await getUserDetails(req, res, Vender);
});

export const deactivateVenderAccount = catchAsyncError(async (req, res) => {
  await deactivateUser(req, res, Vender);
});

//logout controler

export const logoutVender = catchAsyncError((req, res) => {
  logout(req, res);
});

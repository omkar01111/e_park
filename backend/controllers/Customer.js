import { Customer } from "../models/cutomer.js";
import { catchAsyncError } from "../middlewares/CatchAsyncError.js";
import { Vender } from "../models/vender.js";
import {
  deactivateUser,
  getUserDetails,
  // loginUser,
  // logoutUser,
  registerUser,
} from "../utils/authUtils.js";
import { Parking } from "../models/parkingSpots.js";

//Rgister code
export const registerCustomer = catchAsyncError(async (req, res, next) => {
  await registerUser(req, res, next, Customer, Vender);
});

//login controler

// export const loginCustomer = catchAsyncError(async (req, res, next) => {
//   await loginUser(req, res, next, Customer);
// });

export const completeCustomerDetails = catchAsyncError(
  async (req, res, next) => {
    const { gender, address, mobileNo, drivingLicenceNo, image, birthdate } =
      req.body;
    const userId = req.user._id;
    const updatedCustomer = await Customer.findByIdAndUpdate(
      userId,
      { gender, address, mobileNo, drivingLicenceNo, image, birthdate },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Customer details updated successfully",
      user: updatedCustomer,
    });
  }
);

//Get user details

export const getCustomerDetails = catchAsyncError(async (req, res) => {
  await getUserDetails(req, res, Customer);
});

export const deactivateCustomerAccount = catchAsyncError(async (req, res) => {
  await deactivateUser(req, res, Customer);
});

//logout controler

// export const logoutCustomer = catchAsyncError((req, res) => {
//   logoutUser(req, res);
// });
export const getAllSlots = catchAsyncError(async (req, res, next) => {
 const parking = await Parking.find();
     res.status(200).json({
    success: true,
    parking,
  });
});

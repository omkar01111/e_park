import { Vender } from "../models/vender.js";
import { catchAsyncError } from "../middlewares/CatchAsyncError.js";
import { Customer } from "../models/cutomer.js";
import {
  deactivateUser,
  getUserDetails,
  // loginUser,
  registerUser,
} from "../utils/authUtils.js";
import { VenderProfile } from "../models/venderProfile.js";

//Rgister code
export const registerVender = catchAsyncError(async (req, res, next) => {
  await registerUser(req, res, next, Vender, Customer);
});

//login controler

// export const loginVender = catchAsyncError(async (req, res, next) => {
//   await loginUser(req, res, next, Vender);
// });

export const completeVenderDetails = catchAsyncError(async (req, res, next) => {
  const {
    bio,
    companyName,
    address,
    mobileNo,
    gstNumber,
    image,
    instagram,
    facebook,
    twitter,
    website,
  } = req.body;
  const venderId = req.user._id; // Assuming you have the user ID available in the req.user object

  let venderProfile = await VenderProfile.findOne({ userId: venderId });

  if (!venderProfile) {
    venderProfile = new VenderProfile({
      userId: venderId,
      bio,
      companyName,
      address,
      mobileNo,
      gstNumber,
      image,
      instagram,
      facebook,
      twitter,
      website,
    });
  } else {
    venderProfile.bio = bio;
    venderProfile.companyName = companyName;
    venderProfile.address = address;
    venderProfile.mobileNo = mobileNo;
    venderProfile.gstNumber = gstNumber;
    venderProfile.image = image;
    venderProfile.instagram = instagram;
    venderProfile.facebook = facebook;
    venderProfile.twitter = twitter;
    venderProfile.website = website;
  }

  const data= await venderProfile.save();

  res.status(200).json({
    success: true,
    message: "Vender details updated successfully",
    user: data,
  });
});

//Get user details

export const getVenderDetails = catchAsyncError(async (req, res) => {
  await getUserDetails(req, res, VenderProfile);
});

export const deactivateVenderAccount = catchAsyncError(async (req, res) => {
  await deactivateUser(req, res, Vender);
});

//logout controler

// export const logoutVender = catchAsyncError((req, res) => {
//   logout(req, res);
// });

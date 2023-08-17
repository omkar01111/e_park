import { catchAsyncError } from "../middlewares/CatchAsyncError.js";
import { Parking } from "../models/parkingSpots.js";
import ErrorHandler from "../utils/errorHandler.js";

export const addSlot = catchAsyncError(async (req, res, next) => {
  const {
    city,
    location,
    spotType,
    vehicleType,
    totalSpots,
    availableSpots,
    images,
  } = req.body;
  const parking = await Parking.create({
    city,
    location,
    spotType,
    vehicleType,
    totalSpots,
    availableSpots,
    images,
    user: req.user,
  });
  res.status(200).json({
    success: true,
    message: "Slot added successfully",
    parking,
  });
});

export const updateSlot = catchAsyncError(async (req, res, next) => {
  const id = req.params.id;
  const {
    city,
    location,
    spotType,
    vehicleType,
    totalSpots,
    availableSpots,
    images,
  } = req.body;
  if (!id) return next(new ErrorHandler("Invalid", 400));
  const updatedSlot = {
    city,
    location,
    spotType,
    vehicleType,
    totalSpots,
    availableSpots,
    images,
  };
  const parking = await Parking.findByIdAndUpdate(id, updatedSlot, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({
    success: true,
    message: "Slot updated successfully",
    parking,
  });
});

export const removeSlots = catchAsyncError(async (req, res, next) => {
  const id = req.params.id;
  if (!id) return next(new ErrorHandler("Invalid", 400));
  await Parking.findByIdAndDelete({ id });
  res.status(200).json({
    success: true,
    message: `${$location} parking  spot has been removed successfully`,
  });
});
export const getSlot = catchAsyncError(async (req, res, next) => {
  const id = req.params.id;
  const parking = await Parking.findById({ id: _id });
  if (!id) return next(new ErrorHandler("Invalid", 400));
  res.status(200).json({
    success: true,
    parking,
  });
});

export const getAllSlot = catchAsyncError(async (req, res, next) => {
  console.log("1");
  const parkingId = req.user._id;
  console.log(parkingId);
  const parking = await Parking.findById({ user: parkingId} );
  console.log("3");
  if (!parkingId) return next(new ErrorHandler("Invalid", 400));
  console.log("4");
  res.status(200).json({
    success: true,
    parking,
  });
});

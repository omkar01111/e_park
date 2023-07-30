import { catchAsyncError } from "../middlewares/CatchAsyncError.js";
import { Vehicle } from "../models/vehicle.js";
import ErrorHandler from "../utils/errorHandler.js";

export const addVehicle = catchAsyncError(async (req, res, next) => {
  const { type, noOfSeat, model, vehicleNo } = req.body;
  let vehicle = await Vehicle.findOne({ vehicleNo });
  if (vehicle)
    return next(new ErrorHandler(`${vehicleNo} is already exist`, 400));
  vehicle = await Vehicle.create({
    type,
    noOfSeat,
    model,
    vehicleNo,
    user: req.user,
  });
  res.status(200).json({
    success: true,
    message: "Vehicle created successfully",
    vehicle,
  });
});

export const getAllVehicals = catchAsyncError(async (req, res) => {
  const userId = req.user._id;
  const vehicle = await Vehicle.find({ userId });
  res.status(200).json({
    success: true,
    vehicle,
  });
});

export const updateVehicleDetails = catchAsyncError(async (req, res, next) => {
  const { type, noOfSeat, model, vehicleNo, isAvailable } = req.body;
  const vehicleId = req.params.id;
  console.log(vehicleId);
  if (!vehicleId) return next(new ErrorHandler(`Invalid vehicle id`), 400);

  const updateData = { type, noOfSeat, model, vehicleNo, isAvailable };

  const updatedVehicle = await Vehicle.findByIdAndUpdate(
    vehicleId,
    updateData,
    {
      new: true,
      runValidators: true,
    }
  );
  res.status(200).json({
    success: true,
    message: `${vehicleNo} Vehicle updated successfully`,
    updatedVehicle,
  });
});

export const removeVehicle = catchAsyncError(async (req, res, next) => {
  const vehicleId = req.params.id;
  console.log(vehicleId);
  if (!vehicleId) return next(new ErrorHandler(`Invalid vehicle id`), 400);

  await Vehicle.findByIdAndDelete(vehicleId);
  res.status(200).json({
    success: true,
    message: `${vehicleId} Vehicle has been removed successfully`,
  });
});

export const getVehicle = catchAsyncError(async (req, res, next) => {
  const vehicleId = req.params.id;
  const vehicle = await Vehicle.findById({ _id: vehicleId });

  if (!vehicle) return next(new ErrorHandler(`Invalid vehicle id`), 400);

  res.status(200).json({
    success: true,
    vehicle,
  });
});

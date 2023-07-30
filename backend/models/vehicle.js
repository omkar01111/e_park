import mongoose from "mongoose";

const vehicleSchema = new mongoose.Schema({
  type: { type: String, required: true },
  noOfSeat: { type: Number, required: true },
  model: { type: String, required: true },
  vehicleNo: { type: String, required: true, unique: true },
  isAvailable: { type: Boolean, default: false },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    require: true,
  },
});

export const Vehicle = mongoose.model("Vehicle", vehicleSchema);

import mongoose from "mongoose";

const parkingSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    require: true,
  },
  city: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  spotType: {
    type: String,
    required: true,
  },
  vehicleType: {
    type: String,
    required: true,
  },
  totalSpots: {
    type: Number,
    required: true,
  },
  availableSpots: {
    type: Number,
    required: true,
  },
  images: [
    {
      type: String,
      required: true,
    },
  ],
});
export const Parking = mongoose.model("Parking", parkingSchema);

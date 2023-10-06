import mongoose from "mongoose";

const parkingSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    require: true,
  },
  city: {
    type: String,
    sparse: true,
    required: true,
  },
  location: {
    type: String,
    sparse: true,
    required: true,
  },
  spotType: {
    type: String,
    sparse: true,
    
  },
  vehicleType: {
    type: String,
    sparse: true,
    required: true,
  },
  totalSpots: {
    type: Number,
    sparse: true,
    required: true,
  },
  availableSpots: {
    default: function () {
      return this.totalSpots;
    },
    sparse: true,
    type: Number,
    required: true,
  },
  images: {
    sparse: true,
    type: String,
    required: true,
  },

  hourlyPrice: {
    default: 0,
    type: Number,
    required: true,
  },
  dailyPrice: {
    default: 0,
    type: Number,
    required: true,
  },
  weeklyPrice: {
    default: 0,
    type: Number,
    required: true,
  },
  monthlyPrice: {
    default: 0,
    type: Number,
    required: true,
  },
});
export const Parking = mongoose.model("Parking", parkingSchema);

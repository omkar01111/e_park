import mongoose from "mongoose";
import { Vehicle } from "./vehicle.js";

const customerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, select: false },
  gender: String,
  address: String,
  mobileNo: String,
  drivingLicenceNo: String,
  image: String,
  birthdate: Date,
  user:{ type: String, default: 'Customer' }
});

export const Customer = mongoose.model("Customer", customerSchema);

// models/vender.js
import mongoose from "mongoose";

const venderSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, select: false },
  companyName: String,
  address: String,
  mobileNo: String,
  gstNumber: String,
  image: String,
});

export const Vender = mongoose.model("Vender", venderSchema);

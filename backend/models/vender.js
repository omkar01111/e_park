import mongoose, { Schema } from "mongoose";

const schema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },

  gender: {
    type: String,
    enum: ["Male", "Female", "Other"], // Enumerated values for gender
  },
  mobileNo: {
    type: Number,

    unique: true, // Mobile numbers should be unique
  },
  address: {
    type: String,
  },
  addharNo: {
    type: Number,
    unique: true, // Driving license numbers should be unique
  },
  image: {
    type: String, // Assuming you store the image URL or path as a string
  },
  birthdate: {
    type: Date,
  },
  panNo: {
    type: String,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
export const Vender = mongoose.model("Vender", schema);

// models/vender.js
import mongoose from "mongoose";

const venderSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, select: false },
  user: { type: String, default: "Vender" },
  dateJoinning: { type: Date, default: Date.now },
  
 
});

export const Vender = mongoose.model("Vender", venderSchema);

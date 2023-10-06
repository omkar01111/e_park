import mongoose from "mongoose";

const venderProfileSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Vender",
        required: true,
      },
       // Reference to the user document}
  bio: String,
  companyName: {
    type: String,
  },
  address: String,
  mobileNo: {
    type: Number,
    unique: true, // Set this to true to enforce uniqueness
    sparse: true, // Allow multiple documents to have a null or undefined value
  },
  gstNumber: {
    type: String,
    unique: true, // Set this to true to enforce uniqueness
    sparse: true, // Allow multiple documents to have a null or undefined value
  },
  image: String,
  instagram: String,
  facebook: String,
  twitter: String,
  website: String,
});
export const VenderProfile = mongoose.model(
  "VenderProfile",
  venderProfileSchema
);

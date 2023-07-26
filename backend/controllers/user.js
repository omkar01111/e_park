import { User } from "../models/user.js";
import bcrypt from "bcrypt";
import { sendCookie } from "../utils/feature.js";

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    let user = await User.findOne({ email });

    if (user) {
      return res.status(403).json({
        success: false,
        message: `${email} already registered.`,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    user = await User.create({ name, email, password: hashedPassword });

    sendCookie(user, res, `Registed successfully`, 200);
  } catch (error) {
    console.error(error); // Log the error for debugging purposes
    res.status(500).json({
      success: false,
      message: "Registration failed. Please try again later.",
    });
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    let user = await User.findOne({ email }).select("+password");
    const isMatch = await bcrypt.compare(password, user.password);
    if (!user && !isMatch) {
      return res.status(404).json({
        success: false,
        message: `username and password are incorrect`,
      });
    }

    sendCookie(user, res, `Welcome back ${user.name} `, 201);
  } catch (error) {
    console.error(error); // Log the error for debugging purposes
    res.status(500).json({
      success: false,
      message: "Registration failed. Please try again later.",
    });
  }
};

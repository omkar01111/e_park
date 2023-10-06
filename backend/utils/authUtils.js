import ErrorHandler from "./errorHandler.js";
import bcrypt from "bcrypt";
import { sendCookie } from "./feature.js";

export const registerUser = async (
  req,
  res,
  next,
  firstUserType,
  secondUserType
) => {
  const { name, email, password } = req.body;

  let user =
    (await firstUserType.findOne({ email })) ||
    (await secondUserType.findOne({ email }));

  if (user)
    return next(new ErrorHandler("This email is already registered.", 400));

  const hashedPassword = await bcrypt.hash(password, 10);

  user = await firstUserType.create({ name, email, password: hashedPassword });

  sendCookie(user, res, `Registed successfully`, 200);
};

// export const loginUser = async (req, res, next, userType) => {
//   const { email, password } = req.body;

//   let user = await userType.findOne({ email }).select("+password");
//   if (!user)
//     return next(new ErrorHandler(`username and password are incorrect`, 404));

//   const isMatch = await bcrypt.compare(password, user.password);
//   if (!isMatch)
//     return next(new ErrorHandler(`username and password are incorrect`, 404));

//   sendCookie(user, res, `Welcome back ${user.name} `, 200);
// };

export const getUserDetails = async (req, res, userType) => {
  const userId = req.user._id;
  const userDetails = await userType.findOne({ userId: userId });

  res.status(200).json({
    success: true,
    user: userDetails,
  });
};

// export const logoutUser = (req, res) => {
//   res
//     .status(200)
//     .cookie("token", "", {
//       expiers: new Date(Date.now()),
//       sameSite: process.env.NODE_ENV === "Development" ? "lax" : "none",
//       secure: process.env.NODE_ENV === "Development" ? false : true,
//     })
//     .json({
//       success: true,
//       message: "logout successfully",
//     });
// };

export const deactivateUser = async (req, res, userType) => {
  const { id, name } = req.user;
  await userType.findByIdAndDelete(id);
  res.status(200).json({
    success: true,
    message: `${name} Your Account Has Been Deactivated`,
  });
};

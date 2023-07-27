import express from "express";
import {
  addDetails,
  deactivateAccount,
  login,
  logout,
  register,
  userDetails,
} from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/Auth.js";

const router = express.Router();

router.post("/new", register);
router.get("/me", login);

router
  .route("/details")
  .put(isAuthenticated, addDetails)
  .get(isAuthenticated, userDetails);

router.delete("/deactivate", isAuthenticated, deactivateAccount);
router.get("/logout", logout);

export default router;

import express from "express";
const router = express.Router();
import {
  addDetails,
  deactivateAccount,
  login,
  logout,
  register,
  userDetails,
} from "../controllers/Customer.js";
import { isAuthenticated } from "../middlewares/Auth.js";

router.post("/new", register);
router.get("/me", login);

router
  .route("/details")
  .put(isAuthenticated, addDetails)
  .get(isAuthenticated, userDetails);

router.delete("/deactivate", isAuthenticated, deactivateAccount);
router.get("/logout", logout);

export default router;

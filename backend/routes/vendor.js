import express from "express";

const router = express.Router();

import { isAuthenticated } from "../middlewares/Auth.js";
import {
  addDetails_V,
  deactivateAccount_V,
  login_V,
  logout_V,
  register_V,
  userDetails_V,
} from "../controllers/Vender.js";

router.post("/new", register_V);
router.get("/me", login_V);

router
  .route("/details")
  .put(isAuthenticated, addDetails_V)
  .get(isAuthenticated, userDetails_V);

router.delete("/deactivate", isAuthenticated, deactivateAccount_V);
router.get("/logout", logout_V);

export default router;

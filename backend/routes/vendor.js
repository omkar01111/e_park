import express from "express";

const router = express.Router();

import { isAuthenticated } from "../middlewares/Auth.js";
import {
  completeVenderDetails,
  deactivateVenderAccount,
  getVenderDetails,
  loginVender,
  logoutVender,
  registerVender,
} from "../controllers/Vender.js";

router.post("/new", registerVender);
router.get("/me", loginVender);

router
  .route("/details")
  .put(isAuthenticated, completeVenderDetails)
  .get(isAuthenticated, getVenderDetails);

router.delete("/deactivate", isAuthenticated, deactivateVenderAccount);
router.get("/logout", logoutVender);

export default router;

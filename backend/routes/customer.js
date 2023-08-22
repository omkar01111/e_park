import express from "express";
const router = express.Router();
import {
  completeCustomerDetails,
  deactivateCustomerAccount,
  getCustomerDetails,
  // loginCustomer,
  // logoutCustomer,
  registerCustomer,
} from "../controllers/Customer.js";
import { isAuthenticated } from "../middlewares/Auth.js";

router.post("/new", registerCustomer);
// router.post("/me", loginCustomer);

router
  .route("/details")
  .put(isAuthenticated, completeCustomerDetails)
  .get(isAuthenticated, getCustomerDetails);

router.delete("/deactivate", isAuthenticated, deactivateCustomerAccount);
// router.get("/logout", logoutCustomer);

export default router;

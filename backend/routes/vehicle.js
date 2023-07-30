import express from "express";
import { isAuthenticated } from "../middlewares/Auth.js";
import {
  addVehicle,
  getAllVehicals,
  getVehicle,
  removeVehicle,
  updateVehicleDetails,
} from "../controllers/Vehicle.js";

const router = express.Router();

router
  .route("/new")
  .post(isAuthenticated, addVehicle)

  .get(isAuthenticated, getAllVehicals);

router
  .route("/:id")
  .get(isAuthenticated, getVehicle)
  .put(isAuthenticated, updateVehicleDetails)
  .delete(isAuthenticated, removeVehicle);

export default router;

import express from "express";
import { isAuthenticated } from "../middlewares/Auth.js";
import {
  addSlot,
  getAllSlot,
  getSlot,
  removeSlots,
  updateSlot,
} from "../controllers/ParkingSpots.js";

const router = express.Router();

router
  .route("/new")
  .post(isAuthenticated, addSlot)
  .get(isAuthenticated, getAllSlot);

router
  .route("/:id")
  .put(isAuthenticated, updateSlot)
  .delete(isAuthenticated, removeSlots)
  .get(isAuthenticated, getSlot);

export default router;

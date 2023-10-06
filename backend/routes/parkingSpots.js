import express from "express";
import { isAuthenticated } from "../middlewares/Auth.js";
import {
  addSlot,
  getSlot,
  getVenderAllSlot,
  removeSlots,
  updateSlot,
} from "../controllers/ParkingSpots.js";

const router = express.Router();

router
  .route("/new")
  .post(isAuthenticated, addSlot)
  .get(isAuthenticated, getVenderAllSlot);

router
  .route("/:id")
  .put(isAuthenticated, updateSlot)
  .delete(isAuthenticated, removeSlots)
  .get(isAuthenticated, getSlot);

export default router;

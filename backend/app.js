import express, { Router, json } from "express";
import { config } from "dotenv";
import customerRouter from "./routes/customer.js";
import VehicleRouter from "./routes/vehicle.js";
import venderRouter from "./routes/vendor.js";
import parkingRouter from "./routes/parkingSpots.js";
import cookieParser from "cookie-parser";
import errorMiddlewares from "./middlewares/Error.js";

export const app = express();

config({ path: "./data/config.env" });
app.use(express.json());
app.use(cookieParser());

// router
app.use("/api/v2/vender", venderRouter);
app.use("/api/v2/vender/parking", parkingRouter);

app.use("/api/v2/customer", customerRouter);
app.use("/api/v2/customer/vehicle", VehicleRouter);

app.get("/", (req, res) => {
  res.send("welcome");
});

//error middlewares
app.use(errorMiddlewares);

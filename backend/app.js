import express, { Router, json } from "express";
import { config } from "dotenv";
import userRouter from "./routes/user.js";
import cookieParser from "cookie-parser";
import errorMiddlewares from "./middlewares/Error.js";

export const app = express();

config({ path: "./data/config.env" });
app.use(express.json());
app.use(cookieParser());
// router
app.use("/api/v2/users", userRouter);

app.get("/", (req, res) => {
  res.send("welcome");
});

//error middlewares
app.use(errorMiddlewares);

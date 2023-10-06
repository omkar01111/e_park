import mongoose from "mongoose";

export const connectDb = () => {
  mongoose
    .connect(
      process.env.MONGO_URI,
      {
        dbName: "easypark",

        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => {
      console.log(`DB connection established`);
    })
    .catch((err) => {
      console.error("Error connecting to the database:", err);
    });
};

import mongoose from "mongoose";

export const connectDb = () => {
  mongoose
    .connect(
      "mongodb+srv://TodoAPP:Admin123@cluster0.fdbqzjm.mongodb.net/easypark?retryWrites=true&w=majority",
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

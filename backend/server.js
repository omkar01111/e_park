import { app } from "./app.js";
import { connectDb } from "./data/database.js";


connectDb();
app.listen(process.env.PORT || 4000, () => {
  console.log(`listening on http://localhost:${process.env.Port}`);
});


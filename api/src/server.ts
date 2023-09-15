import mongoose from "mongoose";
import dotenv from "dotenv";

import app from "./app";

dotenv.config();

const port = 8000;

mongoose
  .connect(process.env.MONGO_DB_URL as string)
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}.`);
    });
  })
  .catch((error: Error) => {
    console.log("MongoDB connection error");
    process.exit(1);
  });

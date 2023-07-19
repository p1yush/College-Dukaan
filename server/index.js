import express from "express";
import dotenv from "dotenv";

// Databse connection import
import connectDb from "./database/connection";
// importing routes
import userRoutes from "./Routes/user/userRoutes";

const app = express();
dotenv.config();
app.use(express.json());

app.use("/api/v1/user", userRoutes);

const PORT = 4000;

app.listen(PORT, () => {
  connectDb()
    .then(() => {
      console.log(
        `Server is Running on http://localhost:${PORT}\nDatabase Connected Successfully.....`
      );
    })
    .catch((error) => {
      console.log("Server is running but Database Connection Failed.");
      console.log(error);
    });
  // console.log(`Server is Running on http://localhost:${PORT}`);
});

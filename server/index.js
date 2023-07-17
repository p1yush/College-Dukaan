import express from "express";
import dotenv from "dotenv";

// Databse connection import
import connectDb from "./database/connection";

const app = express();
dotenv.config();
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    succes: true,
    message: "Welcome to College-Dukan",
  });
});

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

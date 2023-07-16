const express = require('express')
const app = express();
const connectDb = require("./config/db")
const dotenv = require('dotenv');
dotenv.config();

app.use(express.json());

connectDb();

app.get("/", (req, res) => {
  res.status(200).json({
    succes: true,
    message: "Welcome to College-Dukan",
  });
});

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

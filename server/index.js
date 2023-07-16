import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    succes: true,
    message: "Welcome to College-Dukan",
  });
});

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server is Running on http://localhost:${PORT}`);
});

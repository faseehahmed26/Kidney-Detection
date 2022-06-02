const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
const connectDB = require("./config/db");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware.js");

const app = express();
dotenv.config();
connectDB();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is Running..");
});

app.get("/api/predict", (req, res) => {
  res.json(notes);
});

app.use("/api/users/", userRoutes);
app.use(notFound);

const PORT = process.env.PORT || 2000;
app.listen(PORT, console.log(`Server started on PORT ${PORT}`));

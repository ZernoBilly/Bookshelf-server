import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import booksRoutes from "./routes/books";
const cors = require("cors");

dotenv.config();
const app = express();

const DB_CONNECTION = process.env.DB_CONNECTION as string;
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/books", booksRoutes);

const connect = async () => {
  try {
    await mongoose.connect(DB_CONNECTION);
    console.log("Connected to MongoDB database");
    app.listen(PORT, () => console.log(`Server listening to port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

connect();

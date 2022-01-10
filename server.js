import dotenv from "dotenv";
import express from "express";
import colors from "colors";
import photos from "./api/photos.js";
import cors from "cors";
import mongoose from "mongoose";

dotenv.config();
const PORT = process.env.POT || 3001;
const server = express();

server.use(cors());
server.use(express.urlencoded({ extended: false }));
server.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    server.listen(PORT, () =>
      console.log(`Server started on port ${PORT}`.rainbow)
    );
    console.log("Database connected");
  })
  .catch((e) => console.log("error", e));

server.get("/", (req, res) => res.send("Welcome to the photopedia server"));
server.use("/api/photos", photos);

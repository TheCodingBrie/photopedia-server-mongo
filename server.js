import dotenv from "dotenv";
import express from "express";
import colors from "colors";
import photos from "./api/photos.js";
import cors from "cors";

dotenv.config();
const PORT = process.env.POT || 3000;
const server = express();

server.use(cors());
server.use(express.json());

server.get("/", (req, res) => res.send("Welcome to the photopedia server"));
server.use("/api/photos", photos);

server.listen(PORT, () =>
  console.log(`Server started on port ${PORT}`.rainbow)
);

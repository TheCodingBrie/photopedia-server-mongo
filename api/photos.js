import express from "express";
import {
  getAllPhotos,
  getRandomPhoto,
  getPhotosByLocation,
  getPhotosByType,
  addPhoto,
} from "../controllers/photos.js";

const api = express.Router();

api.route("/").get(getAllPhotos).post(addPhoto);
api.route("/random").get(getRandomPhoto);
api.route("/location/:name/photos").get(getPhotosByLocation);
api.route("/type/:type/photos").get(getPhotosByType);

export default api;

import express from "express";
import {
  getAllPhotos,
  getRandomPhoto,
  getPhotoByLocation,
  getPhotoByType,
  addPhoto,
} from "../controllers/photos.js";

const api = express.Router();

api.route("/").get(getAllPhotos).post(addPhoto);
api.route("/random").get(getRandomPhoto);
api.route("/location/:name/photos").get(getPhotoByLocation);
api.route("/type/:name/photos").get(getPhotoByType);

export default api;

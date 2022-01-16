import express from "express";
import {
  getAllLocations,
  getLocationByName,
  getLocationsByType,
  addLocation,
} from "../controllers/locations.js";

const api = express.Router();

api.route("/").get(getAllLocations).post(addLocation);
api.route("/:name/location").get(getLocationByName);
api.route("/:type/locations").get(getLocationsByType);

export default api;

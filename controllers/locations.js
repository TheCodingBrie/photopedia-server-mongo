import Location from "../models/Location.js";

const getAllLocations = (req, res) => {
  Location.find({})
    .then((result) => {
      res.json(result);
      console.log("getAllLocations");
    })
    .catch((e) => {
      console.log(e);
      res.send({ error: true });
    });
};

const getLocationByName = async (req, res) => {
  try {
    const locationByName = await Location.find(req.params);
    res.json(locationByName);
    console.log("getLocationByName");
  } catch (err) {
    console.log(err);
  }
};

const getLocationsByType = async (req, res) => {
  try {
    const locationsByType = await Location.find(req.params);
    res.json(locationsByType);
    console.log("getLocationsByType");
  } catch (err) {
    console.log(err);
  }
};

const addLocation = async (req, res) => {
  try {
    await Location.create({
      name: req.body.name,
      description: req.body.description,
      lattitude: req.body.lattitude,
      longitude: req.body.longitude,
      type: req.body.type,
    });
    console.log("Used AddLocation");
    res.send("Your photo was added");
  } catch (err) {
    console.log(err);
  }
};

export { getAllLocations, getLocationByName, getLocationsByType, addLocation };

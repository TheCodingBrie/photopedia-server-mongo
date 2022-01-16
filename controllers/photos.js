import Photo from "../models/Photo.js";
import Location from "../models/Location.js";

const getAllPhotos = (req, res) => {
  Photo.find({})
    .populate("location")
    .then((result) => {
      res.json(result);
      console.log("getAllPhotos");
    })
    .catch((e) => {
      console.log(e);
      res.send({ error: true });
    });
};

const getRandomPhoto = async (req, res) => {
  try {
    const photoArray = await Photo.find({}).populate("location");
    res.json(photoArray[Math.floor(Math.random() * photoArray.length)]);
    console.log("getRandomPhoto");
  } catch (err) {
    console.log(err);
  }
};

const getPhotosByType = async (req, res) => {
  try {
    const photosByType = await Photo.find(req.params).populate("location");
    res.json(photosByType);
    console.log("getPhotosByType");
  } catch (err) {
    console.log(err);
  }
};

const getPhotosByLocation = async (req, res) => {
  try {
    const { _id } = await Location.findOne(req.params);
    const photosByLocation = await Photo.find({ location: _id }).populate(
      "location"
    );
    res.json(photosByLocation);
    console.log("getPhotoByLocation");
  } catch (err) {
    console.log(err);
  }
};

const addPhoto = async (req, res) => {
  try {
    await Photo.create({
      title: req.body.title,
      url: req.body.url,
      type: req.body.type,
      location: req.body.locationId,
    });
    console.log("Used AddPhoto");
    res.send("Your photo was added");
  } catch (err) {
    console.log(err);
  }
};

export {
  getAllPhotos,
  getRandomPhoto,
  getPhotosByType,
  getPhotosByLocation,
  addPhoto,
};

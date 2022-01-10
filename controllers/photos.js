import Photo from "../models/Photo.js";

const photos = {
  data: [
    {
      id: "1",
      title: "Berchtesgaden National Park",
      url: "https://live.staticflickr.com/65535/51801704385_9e1f42b065_c.jpg",
      type: "Nature",
      location: "here",
    },
    {
      id: "2",
      title: "Stefan-Pflaum",
      url: "https://live.staticflickr.com/65535/51801703850_5ead77fad7_k.jpg",
      type: "Nature",
      location: "here",
    },
    {
      id: "3",
      title: "Westhavelland",
      url: "https://live.staticflickr.com/65535/51800968726_4e24edcbfb_k.jpg",
      type: "astrophotography",
      location: "here",
    },
    {
      id: "4",
      title: "Westhavelland",
      url: "https://live.staticflickr.com/65535/51801703220_e5abb62433_b.jpg",
      type: "astrophotography",
      location: "here",
    },
  ],
};

const getAllPhotos = (req, res) => {
  Photo.find({})
    .then((result) => console.log(result))
    .catch((e) => {
      console.log(e);
      res.send({ error: true });
    });
};

const getRandomPhoto = async (req, res) => {
  try {
    res.json(photos.data[Math.floor(Math.random() * photos.data.length)]);
    console.log("Used getRandomPhoto");
  } catch (err) {
    console.log(err);
  }
};

const getPhotoByType = async (req, res) => {
  try {
    res.send("getPhotoByType");
  } catch (err) {
    console.log(err);
  }
};

const getPhotoByLocation = async (req, res) => {
  try {
    res.send("getPhotoByLocation");
  } catch (err) {
    console.log(err);
  }
};

// Add validation here or in the app
const addPhoto = async (req, res) => {
  try {
    //photos.data.push(req.body);
    Photo.create({
      title: req.body.title,
      url: req.body.url,
      type: req.body.type,
      location: req.body.location,
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
  getPhotoByType,
  getPhotoByLocation,
  addPhoto,
};

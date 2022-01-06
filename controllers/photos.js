import db from "../dbinit.js";

const photos = {
  data: [
    {
      id: "1",
      name: "lala",
      url: "www.com",
      type: "astrology",
      location: "here",
    },
    {
      id: "2",
      name: "lala2",
      url: "www.com",
      type: "astrology",
      location: "here",
    },
    {
      id: "3",
      name: "lala3",
      url: "www.com",
      type: "astrology",
      location: "here",
    },
    {
      id: "4",
      name: "lala4",
      url: "www.com",
      type: "astrology",
      location: "here",
    },
  ],
};

const getAllPhotos = async (req, res) => {
  try {
    res.json(photos.data);
  } catch (err) {
    console.log(err);
  }
};

const getRandomPhoto = async (req, res) => {
  try {
    res.send("getRandomPhoto");
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

const addPhoto = async (req, res) => {
  try {
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

import mongoose, { Schema } from "mongoose";
const { Schema } = mongoose;

const Photo = new Schema({
  title: String,
  url: String,
  type: String,
  created_at: { type: Date, default: Date.now },
  location: new Schema({
    name: String,
    description: String,
    lattitude: String,
    longitude: String,
    types: String,
    created_at: { type: Date, default: Date.now },
  }),
});

export default mongoose.model("Photo", Photo);

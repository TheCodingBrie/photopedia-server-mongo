import mongoose from "mongoose";
const { Schema } = mongoose;

const Photo = new Schema({
  title: String,
  url: String,
  type: String,
  location: { type: Schema.ObjectId, ref: "Location" },
  created_at: { type: Date, default: Date.now },
});

export default mongoose.model("Photo", Photo);

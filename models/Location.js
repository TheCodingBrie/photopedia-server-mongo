import mongoose from "mongoose";
const { Schema } = mongoose;

const Location = new Schema({
  name: String,
  description: String,
  lattitude: String,
  longitude: String,
  type: String,
  created_at: { type: Date, default: Date.now },
});

export default mongoose.model("Location", Location);

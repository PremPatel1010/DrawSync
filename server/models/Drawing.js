import mongoose from "mongoose";
import User from "./User.js";

const Drawing = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  elements: {
    type: Array,
    required: true,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
})

export default mongoose.model("Drawing", Drawing);
import mongoose from "mongoose";
import { boolean, maxLength } from "zod";


const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxLength: [200, "To long title"],
    trim: true,
  },
  description: {
    type: String,
    required: true,
    maxLength: [1000, "To long title"],
    trim: true,
  },
  completed: {
    type: boolean,
    default: false,
  },
  Priority: {
    type: String,
    enum:['low','medium','high'],
    default:"medium"
  },
},{
    timestamps:true
});

export default mongoose.models.Todo || mongoose.model("Todo", todoSchema)
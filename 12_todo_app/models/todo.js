import mongoose from "mongoose";


const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxLength: [100, "To long title"],
    trim: true,
  },
  description: {
    type: String,
    maxLength: [500, "To long description"],
    trim: true,
  },
  completed: {
    type: Boolean,
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
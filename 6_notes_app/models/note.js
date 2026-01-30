import mongoose from 'mongoose'

const notesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxLength: 100,
  },
  content: {
    type: String,
    required: true,
    maxLength: 2000,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  }
});

// const notesModel = mongoose.Model("notes", notesSchema)

// export default notesModel;

export default mongoose.model('note', notesSchema);
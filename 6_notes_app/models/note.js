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
    type: date,
    default: date.now,
  },
  updatedAt: {
    type: date,
    default: date.now,
  }
});

// const notesModel = mongoose.Model("notes", notesSchema)

// export default notesModel;

export default mongoose.model('note', notesSchema);
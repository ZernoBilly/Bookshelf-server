import mongoose from "mongoose";

const { Schema } = mongoose;

const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
    max: 100,
  },
  author: {
    type: String,
    required: true,
    max: 100,
  },
  description: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Book", bookSchema);

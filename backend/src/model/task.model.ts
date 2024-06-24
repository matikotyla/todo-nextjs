import mongoose, { Schema } from "mongoose";

const taskSchema = new Schema({
  content: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

export const TaskModel = mongoose.model("Task", taskSchema);

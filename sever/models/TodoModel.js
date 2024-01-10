import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    item: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const TodoModel = mongoose.model("todo", todoSchema);
export default TodoModel;

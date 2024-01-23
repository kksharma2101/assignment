import { model, Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
    },
    hobbies: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

//
const user = model("Assignment", userSchema);

export default user;

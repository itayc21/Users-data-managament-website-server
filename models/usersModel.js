const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    ID: Number,
    Title: String,
    Completed: Boolean,
  },
  { _id: false }
);

const postSchema = new mongoose.Schema(
  {
    ID: Number,
    Title: String,
    Body: String,
  },
  { _id: false }
);

const userSchema = new mongoose.Schema(
  {
    ID: Number,
    Name: String,
    Email: String,
    Street: String,
    City: String,
    Zipcode: Number,
    Tasks: [taskSchema],
    Posts: [postSchema],
  },
  { versionKey: false }
);

const User = mongoose.model("User", userSchema, "Users");

module.exports = User;

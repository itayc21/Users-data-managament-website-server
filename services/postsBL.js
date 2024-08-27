const User = require("../models/usersModel");

const addPost = async (userId, postObj) => {
  try {
    const user = await User.findOne({ ID: parseInt(userId) });
    if (!user) {
      throw new Error("User not found");
    }

    user.Posts.push(postObj);

    await user.save();

    return postObj;
  } catch (error) {
    console.error("Error adding Post:", error.message);
    throw error;
  }
};

module.exports = { addPost };

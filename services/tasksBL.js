const User = require("../models/usersModel");

const updateTask = async (userId, taskId, taskObj) => {
  try {
    console.log(`Updating task ${taskId} for user ${userId}`);

    const result = await User.updateOne(
      {
        ID: parseInt(userId),
        "Tasks.ID": parseInt(taskId),
      },
      {
        $set: {
          "Tasks.$.Completed": taskObj.Completed,
        },
      }
    );

    console.log("Update result:", result);

    if (result.nModified === 0) {
      throw new Error("Task not found or no changes applied");
    }

    const updatedUser = await User.findOne({ ID: parseInt(userId) });

    console.log("Updated User:", updatedUser);

    return updatedUser;
  } catch (error) {
    console.error("Error in updateTask function:", error);
    throw error;
  }
};

const addTask = async (userId, taskObj) => {
  try {
    const user = await User.findOne({ ID: parseInt(userId) });
    if (!user) {
      throw new Error("User not found");
    }

    user.Tasks.push(taskObj);

    await user.save();

    return taskObj;
  } catch (error) {
    console.error("Error adding task:", error);
    throw error;
  }
};

module.exports = {
  updateTask,
   addTask
};

const express = require("express");
const tasksBL = require("../services/tasksBL");

const router = express.Router();

router.patch("/:userId/tasks/:taskId", async (req, res) => {
  console.log(
    `Received PATCH request at /tasks/${req.params.userId}/tasks/${req.params.taskId}`
  );

  try {
    const { userId, taskId } = req.params;
    const updateData = req.body;

    console.log("Received userId:", userId);
    console.log("Received taskId:", taskId);
    console.log("Update data:", updateData);

    const updatedUser = await tasksBL.updateTask(userId, taskId, updateData);

    if (!updatedUser) {
      console.log("User or Task not found");
      return res.status(404).send("User or Task not found");
    }

    console.log("Updated User:", updatedUser);
    res.send(updatedUser);
  } catch (error) {
    console.error("Error updating task:", error);
    res.status(500).send("Internal Server Error");
  }
});

router.post("/:userId/tasks", async (req, res) => {
  console.log(`Received POST request at /tasks/${req.params.userId}/tasks`);

  try {
    const { userId } = req.params;
    const taskObj = req.body;

    console.log("Received userId:", userId);
    console.log("Task data:", taskObj);

    const addedTask = await tasksBL.addTask(userId, taskObj);

    console.log("Added Task:", addedTask);
    res.status(201).send(addedTask);
  } catch (error) {
    console.error("Error adding task:", error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;

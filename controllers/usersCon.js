const express = require("express");
const userBL = require("../services/usersBL");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const filters = req.query;
    const users = await userBL.getAllUsers(filters);
    res.send(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userBL.getUserById(id);
    if (!user) {
      return res.status(404).send("User not found");
    }
    res.send(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).send("Internal Server Error");
  }
});

router.post("/", async (req, res) => {
  try {
    const obj = req.body;
    const result = await userBL.addUser(obj);
    res.status(201).send(result);
  } catch (error) {
    console.error("Error adding user:", error);
    res.status(500).send("Internal Server Error");
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const obj = req.body;

    const result = await userBL.updateUser(id, obj);

    if (!result) {
      return res.status(404).send("User not found");
    }
    res.send(result);
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).send("Internal Server Error");
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await userBL.deleteUser(id);
    if (!result) {
      return res.status(404).send("User not found");
    }
    res.send(result);
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;

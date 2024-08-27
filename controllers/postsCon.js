const express = require("express");
const router = express.Router();
const PostBl = require("../services/postsBL");

router.post("/:userId/posts", async (req, res) => {
  console.log(`Received POST request at /users/${req.params.userId}/posts`);

  try {
    const { userId } = req.params;
    const postObj = req.body;

    console.log("Received userId:", userId);
    console.log("Post data:", postObj);

    const addedPost = await PostBl.addPost(userId, postObj);

    console.log("Added Post:", addedPost);
    res.status(201).send(addedPost);
  } catch (error) {
    console.error("Error adding post:", error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;

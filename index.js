const express = require("express");
const cors = require("cors");
const connectDB = require("./configs/db");

const UsersController = require("./controllers/usersCon");
const TasksController = require("./controllers/tasksCon");
const PostsController = require("./controllers/postsCon");

const app = express();
const PORT = 3000;

connectDB();

app.use(cors());
app.use(express.json());

app.use("/users", UsersController);
app.use("/tasks", TasksController);
app.use("/posts", PostsController);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

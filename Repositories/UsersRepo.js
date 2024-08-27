const User = require("../models/usersModel");

const getAllUsers = (filters) => {
  return User.find(filters);
};

const getUserById = (id) => {
  return User.findById(id);
};

const addUser = (obj) => {
  const Use = new User(obj);
  return Use.save();
};

const updateUser = (id, obj) => {
  return User.findByIdAndUpdate(id, obj, {});
};

const deleteUser = (id) => {
  return User.findOneAndDelete({ ID: id });
};

module.exports = {
  getAllUsers,
  getUserById,
  addUser,
  updateUser,
  deleteUser,
};

const usersRepo = require("../Repositories/UsersRepo");

const getAllUsers = (filters = {}) => {
  return usersRepo.getAllUsers(filters);
};
const getById = (id) => {
  return usersRepo.getUserById(id);
};

const addUser = (obj) => {
  return usersRepo.addUser(obj);
};

const updateUser = (id, obj) => {
  return usersRepo.updateUser(id, obj, {});
};

const deleteUser = (id) => {
  return usersRepo.deleteUser(id);
};

module.exports = {
  getAllUsers,
  getById,
  addUser,
  updateUser,
  deleteUser,
};

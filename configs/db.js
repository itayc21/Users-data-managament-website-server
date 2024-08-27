const mongoose = require('mongoose');

const connectDB = () => {
  mongoose
    .connect('mongodb://127.0.0.1:27017/Project-2')
    .then(() => console.log('Connected to Project-2'))
    .catch((error) => console.log(error));
};

module.exports = connectDB;
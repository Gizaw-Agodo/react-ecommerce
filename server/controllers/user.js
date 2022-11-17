const User = require("../model/user.js");

//get  users
const getUsers = async (req, res, next) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

//get  user
const getUser = async (req, res, next) => {
  const id = req.params.id;
  try {
    const users = await User.findById(id);
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

//updating User
const updateUser = async (req, res, next) => {
  const id = req.params.id;
  const data = req.body;
  try {
    const updated = await User.findByIdAndUpdate(id, data, { new: true });
    res.status(200).json(updated);
  } catch (error) {
    next(error);
  }
};

//delete hotel
const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    const deleted = await User.findByIdAndDelete(id);
    res.status(200).json({ user: deleted, message: "successfuly deleted" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getUsers,
  getUser,
  updateUser,
  deleteUser,
};

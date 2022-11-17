const express = require("express");
const router = express.Router();
const {
  getUsers,
  deleteUser,
  updateUser,
  getUser,
} = require("../controllers/user");
const { verifyUser, verifyAdmin } = require("../middleware/auth");

// "/users"
router.get("/", verifyAdmin, getUsers);
router.get("/:id", verifyUser, getUser);
router.patch("/:id", verifyUser, updateUser);
router.delete("/:id", verifyUser, deleteUser);
module.exports = router;

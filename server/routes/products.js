const express = require("express");
const router = express.Router();
const {
  createProduct,
  getProduct,
  getProducts,
  updateProduct,
  deleteProduct,
} = require("../controllers/product");
const { verifyAdmin } = require("../middleware/auth");

// "/products/"
router.get("/", getProducts);
router.get("/:id", getProduct);
router.post("/", verifyAdmin, createProduct);
// router.patch("/:id", verifyAdmin, updateProduct);
// router.delete("/:roomId/:hotelId", verifyAdmin, deleteProduct);
module.exports = router;

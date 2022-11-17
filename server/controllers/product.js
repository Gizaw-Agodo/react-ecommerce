const Product = require("../model/product");

//get Products
const getProducts = async (req, res, next) => {
  const {category } = req.query;
  const qnew = req.query.new;
  try {
    let products;
    if (qnew) {
      products = await Product.find({}).sort({ createdAt: -1 }).limit(5);
    } else if (category) {
      products = await Product.find({
        catagories: { $in: [category] },
      });
    } else {
      products = await Product.find({});
    }
    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};

//getproduct
const getProduct = async (req, res, next) => {
  try {
    const product = await Product.find({_id:req.params.id});
    res.status(200).json(product[0]);
  } catch (error) {
    next(error);
  }
};

// creating Product
const createProduct = async (req, res, next) => {
  const data = req.body;
  try {
    const room = await Product.create(data);
    res.status(201).json(room);
  } catch (error) {
    next(error);
  }
};

//updating Product
const updateProduct = async (req, res, next) => {
  const id = req.params.id;
  const data = req.body;
  try {
    const updated = await Product.findByIdAndUpdate(id, data, { new: true });
    res.status(200).json(updated);
  } catch (error) {
    next(error);
  }
};

//delete Product
const deleteProduct = async (req, res) => {
  const roomId = req.params.roomId;
  const hotelId = req.params.hotelId;
  try {
    const deleted = await Product.findByIdAndDelete(roomId);
    await Hotel.findByIdAndUpdate(hotelId, {
      $pull: { rooms: roomId },
    });
    res.status(200).json({ room: deleted, message: "successfuly deleted" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createProduct,
  updateProduct,
  deleteProduct,
  getProduct,
  getProducts,
};

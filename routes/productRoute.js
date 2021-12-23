const router = require("express").Router();
const productModel = require("../models/productModel");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

// CREATE
router.post("/", verifyTokenAndAdmin, async (req, res) => {
  const newProduct = new productModel(req.body);
  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (error) {
    res.status(500).json(error);
  }
});

// UPDATE PRODUCT
router.post("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updateProduct = await productModel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updateProduct);
  } catch (error) {
    res.status(500).json(error);
  }
});

// DELETE PRODUCT
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await productModel.findByIdAndDelete(req.params.id);
    res.status(200).json("Produit supprimmer !");
  } catch (error) {
    res.status(500).json(error);
  }
});

// GET PRODUCT
router.get("/find/:id", async (req, res) => {
  try {
    const product = await productModel.findById(req.params.id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json(error);
  }
});

// GET ALL PRODUCTS
router.get("/", async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;
  try {
    let products;

    if (qNew) {
      products = await productModel.find().sort({ createdAt: -1 }).limit(1);
    } else if (qCategory) {
      products = await productModel.find({
        categories: {
          $in: [qCategory],
        },
      });
    } else {
      products = await productModel.find();
    }
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;

const router = require("express").Router();
const orderModel = require("../models/oderModel");

const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");


// CREATE
router.post("/", verifyToken, async (req, res) => {
  const newOrder = new orderModel(req.body);
  try {
    const savedOrder = await newOrder.save();
    res.status(200).json(savedOrder);
  } catch (error) {
    res.status(500).json(error);
  }
});

// UPDATE ORDER
router.post("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updateOrder = await orderModel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updateOrder);
  } catch (error) {
    res.status(500).json(error);
  }
});

// DELETE ORDER
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await orderModel.findByIdAndDelete(req.params.id);
    res.status(200).json("Order bien supprimmer...");
  } catch (error) {
    res.status(500).json(error);
  }
});

// GET USER ORDERS
router.get("/find/:userId", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const order = await orderModel.find({
      userId: req.params.userId,
    });
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json(error);
  }
});

// GET ALL ORDERS
router.get("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const orders = await orderModel.find();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json(error);
  }
});

// GET MONTHLY INCOME ORDERS
router.get("/income", verifyTokenAndAdmin, async (req, res) => {
  const date = new Date();
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
  const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

  try {
    const income = await orderModel.aggregate([
      { $match: { createdAt: { $gte: previousMonth } } },
      { $project: { month: { $month: "$createdAt" }, sales: "$amount" } },
      { $group: { _id: "$month", total: { $sum: "$sales" } } },
    ]);
    res.status(200).json(income)
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;

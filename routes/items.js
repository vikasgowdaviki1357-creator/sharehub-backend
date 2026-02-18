const express = require("express");
const router = express.Router();
const Item = require("../models/Item");

// ===== GET all items =====
router.get("/all", async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ===== POST new item =====
router.post("/add", async (req, res) => {
  try {
    const newItem = new Item(req.body);
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// ===== Mark as sold =====
router.put("/sold/:id", async (req, res) => {
  try {
    await Item.findByIdAndUpdate(req.params.id, { sold: true });
    res.json({ message: "Marked as sold" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
router.get("/test-add", async (req, res) => {
  const item = new Item({
    name: "Test Book",
    category: "Study",
    price: 100,
    yearsUsed: 1,
    phone: "9999999999",
    image: "test.jpg",
    sellerEmail: "test@gmail.com",
    sold: false
  });

  await item.save();
  res.send("Test item added");
});

module.exports = router;
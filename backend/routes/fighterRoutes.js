const express = require("express");
const router = express.Router();
const Fighter = require("../models/Fighter");

// Get all fighters
router.get("/", async (req, res) => {
  try {
    const fighters = await Fighter.find({});
    res.json(fighters);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Add a new fighter (for testing purposes)
const generateUniqueFighterId = async () => {
  const count = await Fighter.countDocuments(); // Get current number of fighters
  return count + 1; // Simple way to assign unique IDs
};

// Usage in your route
router.post("/", async (req, res) => {
  const { name, age, flag, record } = req.body;
  const fighterId = await generateUniqueFighterId(); // Generate a unique fighter_id
  const newFighter = new Fighter({
    name,
    age,
    flag,
    record,
    fighter_id: fighterId,
  });
  try {
    const fighter = await Fighter.findOne({ name });
    if (fighter) {
      return res.status(404).json({ message: "Fighter already exists" });
    }
    await newFighter.save();
    res.status(201).json(newFighter);
  } catch (error) {
    res.status(400).json({ error });
  }
});

module.exports = router;

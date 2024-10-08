const express = require("express");
const router = express.Router();
const Fighter = require("../models/Fighter"); // Assuming you have a Fighter model
const Match = require("../models/Match"); // The Match model

// ELO Calculation Function
const calculateELO = (matches, initialRating = 2000) => {
  let rating = initialRating; // Starting ELO rating

  matches.forEach((match) => {
    const {
      result, // 1 for win, 0 for loss, 0.5 for draw
      kd,
      sig,
      takedowns,
      takedownDefended,
      subAttempts,
      isChampionship,
      knockoutSub,
      ksubloss,
    } = match;

    // Expected score calculation
    const champPoints = result == 1 ? (isChampionship == 1 ? 25 : 0) : 0;
    const kwin = knockoutSub == 1 ? 25 : 0;
    const winPoints = result == 1 ? 25 : result == 0.5 ? 0 : -25;
    const kloss = ksubloss == 1 ? -25 : 0;
    const totalWPoints = champPoints + winPoints + kwin + kloss;

    // Performance score calculation
    const performanceScore =
      15 * kd +
      0.2 * sig +
      2.5 * takedowns +
      2 * takedownDefended +
      2 * subAttempts;

    console.log("totalWPoints " + totalWPoints);
    console.log("performanceScore " + performanceScore);

    const totalPoints = totalWPoints + performanceScore;
    console.log("totalPoints " + totalPoints);

    // Update rating based on the result
    rating += totalPoints;
    console.log("rating: " + Math.round(rating));
  });

  return Math.round(rating); // Return the updated ELO rating
};

// Add Match Endpoint
router.post("/addMatch", async (req, res) => {
  const {
    fighterName,
    isChampionship,
    result, // result should be 1 for win, 0 for loss
    kd,
    sig,
    takedowns,
    takedownDefended,
    subAttempts,
    knockoutSub,
    ksubloss,
  } = req.body;

  try {
    // Find the fighter by name
    const fighter = await Fighter.findOne({ name: fighterName });
    if (!fighter) {
      return res.status(404).json({ message: "Fighter not found" });
    }

    // Create a new match
    const match = new Match({
      fighter: fighter._id,
      isChampionship,
      result,
      kd,
      sig,
      takedowns,
      takedownDefended,
      subAttempts,
      knockoutSub,
      ksubloss,
    });

    // Get all matches for the fighter to calculate new ELO ratings
    const fighterMatches = await Match.find({ fighter: fighter._id });

    // Calculate new ELO ratings
    const newEloFighter = calculateELO([...fighterMatches, match], 2000);

    // Ensure that the newEloFighter is a number and not NaN
    if (isNaN(newEloFighter)) {
      return res
        .status(400)
        .json({ message: "Invalid ELO rating calculated." });
    }
    fighter.eloRating = newEloFighter;

    // Update fighter's ELO rating
    fighter.eloRating = newEloFighter;

    // Save match and fighter
    await match.save();
    await fighter.save();

    res.status(201).json({ message: "Match added successfully", match });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
});

module.exports = router;

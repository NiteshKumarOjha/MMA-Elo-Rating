const mongoose = require("mongoose");

const fighterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  flag: {
    type: String,
    required: true,
  },
  record: {
    type: String,
    required: true,
  },
  eloRating: {
    type: Number,
    required: true,
    default: 2000, // Default ELO rating for new fighters
  },
  matches: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Match",
    },
  ],
  fighter_id: {
    // Add this field if it's needed
    type: Number,
    unique: true, // Set unique constraint if you want it to be unique
    required: true, // Mark as required if necessary
  },
});

module.exports = mongoose.model("Fighter", fighterSchema);

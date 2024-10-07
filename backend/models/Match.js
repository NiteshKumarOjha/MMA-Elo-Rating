const mongoose = require("mongoose");

const matchSchema = new mongoose.Schema(
  {
    fighter: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Fighter",
      required: true,
    },

    isChampionship: {
      type: Boolean,
      required: true,
      default: false,
    },
    result: {
      type: Number, // 1 for win, 0 for loss, 0.5 for draw
      required: true,
    },
    kd: {
      type: Number,
      required: true,
    },
    head: {
      type: Number,
      required: true,
    },
    body: {
      type: Number,
      required: true,
    },
    legs: {
      type: Number,
      required: true,
    },
    control: {
      type: Number,
      required: true,
    },
    takedowns: {
      type: Number,
      required: true,
    },
    takedownDefended: {
      type: Number,
      required: true,
    },
    subAttempts: {
      type: Number,
      required: true,
    },
    knockoutSub: {
      type: Number,
      required: true, // 1 means yes 0 means no
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Match", matchSchema);

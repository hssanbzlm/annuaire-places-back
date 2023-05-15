const mongoose = require("mongoose");

const placeShema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  dateAdded: {
    required: true,
    type: Date,
  },
  description: {
    required: true,
    type: String,
  },
  phone: {
    required: true,
    type: String,
  },
  country: {
    required: true,
    type: mongoose.SchemaTypes.ObjectId,
    ref: "country",
  },
});

module.exports = mongoose.model("place", placeShema);

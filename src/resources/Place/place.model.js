const mongoose = require("mongoose");

const placeShema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  country: {
    required: true,
    type: mongoose.SchemaTypes.ObjectId,
    ref: "country",
  },
  city: {
    required: true,
    type: String,
  },
  description: {
    required: true,
    type: String,
  },
  category: {
    required: true,
    type: mongoose.SchemaTypes.ObjectId,
    ref: "category",
  },
  phone: {
    required: true,
    type: String,
  },
  dateAdded: {
    required: true,
    type: String,
  },
});

module.exports = mongoose.model("place", placeShema);

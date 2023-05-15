const mongoose = require("mongoose");
const countryShema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  continent: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("country", countryShema);

const mongoose = require("mongoose");
const Place = require("../Place/place.model");
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

countryShema.pre("findOneAndRemove", async function (next) {
  const doc = await this.model(this.getQuery());
  await Place.deleteMany({ country: doc._id });
  next();
});

module.exports = mongoose.model("country", countryShema);

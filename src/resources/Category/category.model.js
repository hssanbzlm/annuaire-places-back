const mongoose = require("mongoose");
const Place = require("../Place/place.model");

const categoryShema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

categoryShema.pre("findOneAndRemove", async function (next) {
  const doc = await this.model(this.getQuery());
  await Place.deleteMany({ category: doc._id });
  next();
});

module.exports = mongoose.model("category", categoryShema);

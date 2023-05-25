const Country = require("../resources/Country/country.model");
const Category = require("../resources/Category/category.model");
const findCountryId = async (name) => {
  try {
    const doc = await Country.findOne({ name: name }).select({ _id: 1 }).exec();
    if (doc) {
      return doc._id.toString();
    }
    return null;
  } catch (err) {}
};

const findCategoryId = async (name) => {
  try {
    const doc = await Category.findOne({ name: name })
      .select({ _id: 1 })
      .exec();
    if (doc) {
      return doc._id.toString();
    }
    return null;
  } catch (err) {}
};

module.exports = { findCountryId, findCategoryId };

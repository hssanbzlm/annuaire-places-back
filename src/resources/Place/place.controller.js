const Place = require("./place.model");
const { findCountryId, findCategoryId } = require("../../utils/helpers");
module.exports.placesList = async (req, res) => {
  try {
    const docs = await Place.find()
      .populate([
        { path: "country", select: "name" },
        { path: "category", select: "name" },
      ])
      .exec();
    if (!docs) {
      return res.status(400).end();
    }
    res.status(200).send({ data: docs });
  } catch (e) {
    res.status(400).end();
  }
};

module.exports.addPlace = async (req, res) => {
  try {
    const countryId = await findCountryId(req.body.country);
    const categoryId = await findCategoryId(req.body.category);
    const date = new Date();
    if (countryId && categoryId) {
      const doc = await Place.create({
        ...req.body,
        country: countryId,
        category: categoryId,
        dateAdded: date,
      });
      if (doc) {
        const addedDoc = await Place.findById(doc._id)
          .populate([
            { path: "country", select: "name" },
            { path: "category", select: "name" },
          ])
          .exec();
        return res.status(200).send({
          data: updatedDoc,
        });
      }
    }
    res.status(400).send({ data: "error" });
  } catch (e) {
    res.status(400).end();
  }
};

module.exports.removePlace = async (req, res) => {
  try {
    const doc = await Place.findOneAndRemove({ _id: req.body._id });
    if (!doc) {
      return res.status(400).end();
    }
    res.status(200).send({ data: doc });
  } catch (e) {
    res.status(400).end();
  }
};

module.exports.updatePlace = async (req, res) => {
  try {
    const countryId = await findCountryId(req.body.country);
    const categoryId = await findCategoryId(req.body.category);

    if (countryId && categoryId) {
      const doc = await Place.findOneAndUpdate(
        { _id: req.body._id },
        { ...req.body, country: countryId, category: categoryId },
        { new: true }
      );
      if (doc) {
        const updatedDoc = await Place.findById(doc._id)
          .populate([
            { path: "country", select: "name" },
            { path: "category", select: "name" },
          ])
          .exec();
        return res.status(200).send({
          data: updatedDoc,
        });
      }
    }
    res.status(400).send({ data: "error" });
  } catch (e) {
    res.status(400).end();
  }
};

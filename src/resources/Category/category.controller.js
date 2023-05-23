const Category = require("./category.model");

module.exports.categoriesList = async (req, res) => {
  try {
    const docs = await Category.find();
    if (!docs) {
      return res.status(400).end();
    }
    res.status(200).send({ data: docs });
  } catch (e) {
    res.status(400).end();
  }
};
module.exports.addCategorie = async (req, res) => {
  try {
    const doc = await Category.create({ ...req.body });
    if (!doc) {
      return res.status(400).end();
    }
    res.status(200).send({ data: doc });
  } catch (e) {
    res.status(400).end();
  }
};
module.exports.updateCategorie = async (req, res) => {
  try {
    const doc = await Category.findOneAndUpdate(
      { _id: req.body._id },
      { ...req.body },
      { new: true }
    );
    if (!doc) {
      return res.status(400).end();
    }
    res.status(200).send({ data: doc });
  } catch (e) {
    res.status(400).end();
  }
};
module.exports.removeCategorie = async (req, res) => {
  try {
    const doc = await Category.findOneAndRemove({ _id: req.body._id });
    if (!doc) {
      return res.status(400).end();
    }
    res.status(200).send({ data: doc });
  } catch (e) {
    res.status(400).end();
  }
};

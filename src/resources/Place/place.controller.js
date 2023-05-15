const Place = require("./place.model");

module.exports.placesList = async (req, res) => {
  try {
    const docs = await Place.find();
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
    const doc = await Place.create({ ...req.body });
    if (!doc) {
      return res.status(400).end();
    }
    res.status(200).send({ data: doc });
  } catch (e) {
    res.status(400).end();
  }
};

module.exports.removePlace = async (req, res) => {
  try {
    const doc = await Place.findOneAndRemove({ _id: req.body.id });
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
    const doc = await Place.findOneAndUpdate(
      { _id: req.body.id },
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

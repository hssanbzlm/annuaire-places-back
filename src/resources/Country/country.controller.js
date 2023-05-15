const Country = require("./country.model");

module.exports.countriesList = async (req, res) => {
  try {
    const docs = await Country.find();
    if (!docs) {
      return res.status(400).end();
    }
    res.status(200).send({ data: docs });
  } catch (e) {
    res.status(400).end();
  }
};

module.exports.addCountry = async (req, res) => {
  try {
    const doc = await Country.create({ ...req.body });
    if (!doc) {
      return res.status(400).end();
    }
    res.status(200).send({ data: doc });
  } catch (e) {
    res.status(400).end;
  }
};

module.exports.removeCountry = async (req, res) => {
  try {
    const doc = await Country.findOneAndRemove({ _id: req.body.id });
    if (!doc) {
      return res.status(400).end();
    }
    res.status(200).send({ data: doc });
  } catch (e) {
    res.status(400).end;
  }
};
module.exports.updateCountry = async (req, res) => {
  try {
    const doc = await Country.findOneAndUpdate({ _id: req.body.id }, req.body, {
      new: true,
    });
    if (!doc) {
      return res.status(400).end();
    }
    res.status(200).end();
  } catch (e) {
    res.status(400).end;
  }
};

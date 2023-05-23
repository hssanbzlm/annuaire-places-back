const User = require("./user.model");
const { newToken } = require("../../utils/auth");
module.exports.signin = async (req, res) => {
  if (!req.body.email || !req.body.password) {
    return res.status(404).send({ message: "Email and password are required" });
  }
  var user = req.body;

  const doc = await User.findOne({ email: user.email });
  if (!doc) {
    return res.status(404).send({ data: "error" });
  } else {
    doc
      .checkPassword(user.password)
      .then((v) => {
        if (v) {
          return res.status(200).send({ token: newToken(doc) });
        }
        res.status(404).send({ data: "error" });
      })
      .catch((err) => {
        res.status(404).end(err);
      });
  }
};

module.exports.signup = async (req, res) => {
  if (!req.body.email || !req.body.password) {
    return res.status(404).send({ message: "Email and password are required" });
  }
  try {
    const doc = await User.create(req.body);
    if (!doc) {
      return res.status(404).send({ data: "error" });
    }
    res.status(201).send({ message: "user created successfuly" });
  } catch (err) {
    res.status(404).send(err);
  }
};

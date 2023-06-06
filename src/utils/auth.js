const { envConfig } = require("../config");
const jwt = require("jsonwebtoken");
const User = require("../resources/User/user.model");
module.exports.newToken = (user) => {
  return jwt.sign({ id: user.id }, envConfig.secrets.jwt);
};

const verifyToken = (token) =>
  new Promise((resolve, reject) => {
    jwt.verify(token, envConfig.secrets.jwt, (err, payload) => {
      if (err) return reject(err);
      resolve(payload);
    });
  });

module.exports.protect = (req, res, next) => {
  var token = req.headers.authorization;
  if (token) {
    verifyToken(token.slice(7))
      .then((payload) => {
        User.findById(payload.id)
          .then((user) => {
            if (user) next();
            else {
              res.status(404).send({ message: "no auth" });
            }
          })
          .catch((err) => res.status(404).send({ message: err }));
      })
      .catch((err) => res.status(404).send({ message: err }));
  } else {
    res.status(401).send({ message: "no auth" });
  }
};

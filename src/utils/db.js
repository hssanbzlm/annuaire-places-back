const mongoose = require("mongoose");
const { envConfig } = require("../config/dev");

module.exports.connect = () => {
  return mongoose.connect(envConfig.dbUrl, {
    autoIndex: true,
  });
};

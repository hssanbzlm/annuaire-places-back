const mongoose = require("mongoose");
const { envConfig } = require("../config");

module.exports.connect = () => {
  return mongoose.connect(
    envConfig.dbUrl,
    { dbName: envConfig.dbName },
    {
      autoIndex: true,
    }
  );
};

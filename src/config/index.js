const { envConfigProd } = require("./prod");
const { envConfigDev } = require("./dev");
const env = process.env.NODE_ENV || "development";
envConfig = {};
switch (env) {
  case "development":
    envConfig = envConfigDev;
    break;
  case "production":
    envConfig = envConfigProd;
    break;

  default:
    envConfig = envConfigProd;
}

module.exports.envConfig = envConfig;

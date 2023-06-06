module.exports.envConfigProd = {
  port: process.env.port,
  dbUrl: process.env.dbUrl,
  dbName: process.env.dbName,
  secrets: {
    jwt: process.env.secrets,
  },
};

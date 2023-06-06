const express = require("express");
const { json, urlencoded } = require("body-parser");
const cors = require("cors");
const { connect } = require("./utils/db");
const { envConfig } = require("./config");
const countryRouter = require("./resources/Country/country.router");
const placeRouter = require("./resources/Place/place.router");
const categoryRouter = require("./resources/Category/category.router");
const userRouter = require("./resources/User/user.router");
const app = express();
app.use(urlencoded({ extended: true }));
app.use(json());
app.use(cors());
app.use("/api/country", countryRouter);
app.use("/api/place", placeRouter);
app.use("/api/category", categoryRouter);
app.use("/api/auth", userRouter);
module.exports.start = async () => {
  try {
    await connect();
    app.listen(envConfig.port, () => {
      console.log("listening on " + envConfig.port);
    });
  } catch (e) {
    console.log("error ", e);
  }
};

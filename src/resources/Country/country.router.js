const { Router } = require("express");
const {
  addCountry,
  removeCountry,
  updateCountry,
  countriesList,
} = require("./country.controller");

const router = Router();

router.get("/", countriesList);
router.post("/add", addCountry);
router.delete("/remove", removeCountry);
router.put("/update", updateCountry);

module.exports = router;

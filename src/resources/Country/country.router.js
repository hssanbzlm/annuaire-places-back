const { Router } = require("express");
const {
  addCountry,
  removeCountry,
  updateCountry,
  countriesList,
} = require("./country.controller");
const { protect } = require("../../utils/auth");

const router = Router();

router.get("/", countriesList);
router.post("/add", protect, addCountry);
router.delete("/remove", protect, removeCountry);
router.put("/update", protect, updateCountry);

module.exports = router;

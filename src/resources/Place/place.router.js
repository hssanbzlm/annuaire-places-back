const { Router } = require("express");
const {
  addPlace,
  removePlace,
  updatePlace,
  placesList,
} = require("./place.controller");
const { protect } = require("../../utils/auth");

const router = Router();

router.get("/", placesList);
router.post("/add", protect, addPlace);
router.delete("/remove", protect, removePlace);
router.put("/update", protect, updatePlace);

module.exports = router;

const { Router } = require("express");
const {
  addPlace,
  removePlace,
  updatePlace,
  placesList,
} = require("./place.controller");

const router = Router();

router.get("/", placesList);
router.post("/add", addPlace);
router.delete("/remove", removePlace);
router.put("/update", updatePlace);

module.exports = router;

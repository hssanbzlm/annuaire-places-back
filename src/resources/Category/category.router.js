const { Router } = require("express");
const {
  categoriesList,
  addCategorie,
  updateCategorie,
  removeCategorie,
} = require("./category.controller");
const { protect } = require("../../utils/auth");

const router = Router();

router.get("/", categoriesList);
router.post("/add", protect, addCategorie);
router.put("/update", protect, updateCategorie);
router.delete("/remove", protect, removeCategorie);

module.exports = router;

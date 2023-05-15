const { Router } = require("express");
const {
  categoriesList,
  addCategorie,
  updateCategorie,
  removeCategorie,
} = require("./category.controller");

const router = Router();

router.get("/", categoriesList);
router.post("/add", addCategorie);
router.put("/update", updateCategorie);
router.delete("/remove", removeCategorie);

module.exports = router;

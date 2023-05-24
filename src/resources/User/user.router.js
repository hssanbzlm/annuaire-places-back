const { Router } = require("express");

const userController = require("./user.controller");

const router = Router();

router.post("/signup", userController.signup);
router.post("/signin", userController.signin);

module.exports = router;

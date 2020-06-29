const express = require("express");
const router = express.Router();

const homeController = require("./controllers/homeController");
const sobreController = require("./controllers/sobreController");

router.get("/", homeController.home);
router.get("/sobre", sobreController.sobre);

module.exports = router;

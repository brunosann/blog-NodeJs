const express = require("express");
const router = express.Router();

const homeController = require("./controllers/homeController");
const sobreController = require("./controllers/sobreController");
const escrevaBlogController = require("./controllers/escrevaBlogController");

router.get("/", homeController.home);
router.get("/sobre", sobreController.sobre);
router.get("/escreva-para-o-blog", escrevaBlogController.escreva);

module.exports = router;

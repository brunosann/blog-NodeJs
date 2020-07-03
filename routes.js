const express = require("express");
const router = express.Router();

const homeController = require("./controllers/homeController");
const sobreController = require("./controllers/sobreController");
const escrevaBlogController = require("./controllers/escrevaBlogController");
const userController = require("./controllers/userController");
const postController = require("./controllers/postController");
const authMiddleware = require("./middleware/auth");
const imageMiddleware = require("./middleware/image");

router.get("/", homeController.home);
router.get("/sobre", sobreController.sobre);
router.get("/escreva-para-o-blog", escrevaBlogController.escreva);

router.get("/users/login", userController.login);
router.post("/users/login", userController.loginAction);
router.get("/users/logout", userController.logout);

router.get("/users/post", authMiddleware.auth, postController.post);
router.post(
  "/users/post",
  authMiddleware.auth,
  imageMiddleware.upload,
  postController.postAction,
);

router.get("/users/cadastro", userController.cadastro);
router.post("/users/cadastro", userController.cadastroAction);

module.exports = router;

const express = require("express");
const mustache = require("mustache-express");
require("dotenv").config({ path: "variables.env" });
const helpers = require("./helpers");

const app = express();
const router = require("./routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/public"));

app.use((req, res, next) => {
  res.locals.h = helpers;
  next();
});

app.use("/", router);

app.use((req, res, next) => {
  res.status = 404;
  res.send("<h1>Pagina não encontrada</h1>");
});

app.engine("mst", mustache(__dirname + "/views/partials", ".mst"));
app.set("view engine", "mst");
app.set("views", __dirname + "/views");

app.listen(process.env.PORT, () => {
  console.log(`Run Port: ${process.env.PORT}`);
});

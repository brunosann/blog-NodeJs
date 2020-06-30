const db = require("../models/db");

exports.home = async (req, res) => {
  console.log(req.user);
  const dados = {};
  const query = await db.db_query("SELECT * FROM usuarios");
  if (query.length > 0) {
    dados.data = query;
  }
  res.render("home", dados);
};

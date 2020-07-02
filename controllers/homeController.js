const db = require("../models/db");

exports.home = async (req, res) => {
  const dados = {};
  const query = await db.db_query("SELECT * FROM usuarios");
  if (query.length > 0) {
    dados.data = query;
  }
  res.render("home", dados);
};

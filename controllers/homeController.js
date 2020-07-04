const db = require("../models/db");

exports.home = async (req, res) => {
  const convertDate = (date) => {
    return date
      .toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      })
      .split("-")
      .reverse()
      .join("/");
  };

  const convertDatePost = (dados) => {
    dados.forEach((dado) => {
      dado.data_post = convertDate(dado.data_post);
    });
  };

  const dados = {};
  const query = await db.db_query("SELECT * FROM posts");
  if (query.length > 0) {
    const datea = convertDate(query[0].data_post);
    convertDatePost(query);
    dados.data = query;
  }
  res.render("home", dados);
};

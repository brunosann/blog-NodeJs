const db = require("../models/db");

exports.post = (req, res) => {
  res.render("post", { height: true });
};

exports.postAction = async (req, res) => {
  const { title, body } = req.body;
  const { id, nome } = req.session.user;
  const nameImg = req.file.filename;

  await db.db_query(
    "INSERT INTO posts (url_img, titulo, data_post, conteudo, user_id, user_name) VALUES (?, ?, NOW(), ?, ?, ?)",
    [nameImg, title, body, id, nome],
  );

  res.redirect("/");
};

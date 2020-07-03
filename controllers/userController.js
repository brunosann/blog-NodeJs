const bcrypt = require("bcrypt");
const db = require("../models/db");

exports.login = (req, res) => {
  res.render("login", { height: true });
};

exports.loginAction = async (req, res) => {
  const { email, password } = req.body;

  const user = await db.db_query("SELECT * FROM usuarios WHERE email = ?", [
    email,
  ]);

  if (user.length < 1) return res.redirect("/users/login");
  bcrypt.compare(password, user[0].senha, (err, result) => {
    if (result) {
      const { id, nome, email } = user[0];
      const userData = { id, nome, email };
      req.session.user = userData;
      return res.redirect("/");
    }
    return res.redirect("/users/login");
  });
};

exports.cadastro = (req, res) => {
  res.render("cadastro", { height: true });
};

exports.cadastroAction = async (req, res) => {
  const { name, email, password } = req.body;

  const verif_email = await db.db_query(
    "SELECT * FROM usuarios WHERE email = ?",
    [email],
  );
  if (verif_email.length > 0) return res.redirect("/users/login");

  bcrypt.hash(password, 10, async (err, hash) => {
    if (err) return res.redirect("/users/cadastro");
    await db.db_query(
      "INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)",
      [name, email, hash],
    );
    res.redirect("/users/login");
  });
};

exports.logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) return console.log(err);
    res.redirect("/");
  });
};

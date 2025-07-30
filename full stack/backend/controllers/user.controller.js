const db = require("../config/db.mysql");
const bcrypt = require("bcryptjs");

exports.register = async (req, res) => {
  const { username, password } = req.body;
  const hashed = await bcrypt.hash(password, 10);
  db.query("INSERT INTO users (username, password) VALUES (?, ?)", [username, hashed], err => {
    if (err) return res.status(500).send(err);
    res.send("User registered");
  });
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  db.query("SELECT * FROM users WHERE username = ?", [username], async (err, results) => {
    if (err || results.length === 0) return res.status(400).send("Invalid credentials");
    const valid = await bcrypt.compare(password, results[0].password);
    if (!valid) return res.status(401).send("Unauthorized");
    res.send("Login successful");
  });
};

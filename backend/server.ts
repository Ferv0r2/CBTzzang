const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");

const app = express();

const connection = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "password",
  database: "datebase",
});
connection.connect();

app.use(bodyParser.urlencoded({ extended: false }));

app.post("/signup", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  // 새로운 사용자 추가
  const query = `INSERT INTO users (username, password) VALUES (?, ?)`;
  connection.query(query, [username, password], (error, result) => {
    if (error) {
      console.error(error);
      res.status(500).send("Error signing up");
      return;
    }
    res.send("Successfully signed up");
  });
});

app.get("/users", (req, res) => {
  // 사용자 정보 조회
  const query = `SELECT * FROM users`;
  connection.query(query, (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).send("Error fetching users");
      return;
    }
    res.send(results);
  });
});

// 서버 시작
const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

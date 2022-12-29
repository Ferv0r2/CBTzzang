require("dotenv");
const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const bodyParser = require("body-parser");

interface User {
  username: string;
  password: string;
  email: string;
}

const app = express();

// CORS 에러 제거
app.use(cors());

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.DB_PASSWORD,
  database: "user_db",
});
connection.connect();

app.use(bodyParser.urlencoded({ extended: false }));

app.post("/signup", (req: any, res: any) => {
  const username = req.body.username;
  const password = req.body.password;

  // 새로운 사용자 추가
  const query = `INSERT INTO users (username, password, email) VALUES (유저명, 비번, 이메일@gmail.com)`;
  connection.query(query, [username, password], (error: any, result: any) => {
    if (error) {
      console.error(error);
      res.status(500).send("Error signing up");
      return;
    }
    res.send("Successfully signed up");
  });
});

app.get("/users", (req: any, res: any) => {
  // 사용자 정보 조회
  const query = `SELECT * FROM users`;
  connection.query(query, (error: any, results: any) => {
    if (error) {
      console.error(error);
      res.status(500).send("Error fetching users");
      return;
    }
    res.send(results);
  });
});

// 서버 시작
const port = 8000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

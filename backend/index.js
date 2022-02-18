const express = require("express");
const app = express();
const port = 3001;

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, OPTION"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/", function (req, res) {
  try {
    res.json(req.body);
  } catch (error) {
    console.error(error);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

/*
app.METHOD(PATH, HANDLER)
app は、express のインスタンスです。
METHOD は、HTTP 要求メソッド です。
PATH は、サーバー上のパスです。
HANDLER は、ルートが一致したときに実行される関数です。
https://expressjs.com/ja/starter/basic-routing.html
*/

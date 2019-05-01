const express = require("express");
const app = express();
const port = 3052;

app.get("/", (req, res) => {
  for (let i = 0; i < 200; i++) {
    res.cookie(`c${i}`, `${i}`);
  }
  res.send("Hello World!");
});

app.get('/headers', (req, res) => {
  console.log(req.headers);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

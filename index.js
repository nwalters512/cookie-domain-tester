const express = require("express");
const app = express();
const port = 3052;

app.set('trust proxy', 'loopback')

app.get("/", (req, res) => {
  for (let i = 0; i < 200; i++) {
    res.cookie(`c${i}`, `${i}`);
  }
  res.send("Hello World!");
});

app.get('/headers', (req, res) => {
  console.log(req.headers);
  console.log(req.protocol);
  console.log(req.secure);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

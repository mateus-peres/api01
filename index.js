const express = require("express");

const app = express();

app.get("/teste", (req, res) => {
  return res.json({ hello: "world-agenda" });
});

app.listen(3333);

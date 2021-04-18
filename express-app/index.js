const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, resp) => {
  resp.send("Welcome this is a Express App!!");
});

app.listen(port, () => {
  console.log(`Express App listening on port ${port}!!`);
});

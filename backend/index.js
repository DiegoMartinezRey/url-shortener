const express = require("express");
const app = express();

app.listen(process.env.PORT || `0.0.0.0:$PORT`, () => {
  console.log("Running server");
});

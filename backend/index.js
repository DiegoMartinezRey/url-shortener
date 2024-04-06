require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const urlRouter = require("./routes/urlRouter");

app.use(express.json());
app.use(cors());

app.use("/app", urlRouter);

console.log(process.env.PORT);

app.listen(process.env.PORT, () => {
  console.log("Running server");
});

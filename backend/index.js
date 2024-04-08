require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const urlRouter = require("./routes/urlRouter");

const user = process.env.MONGODB_USER;
const password = process.env.MONGODB_PASSWORD;
const nameCollection = process.env.MONGODB_NAMECOLLECTION;
const url = `mongodb+srv://${user}:${password}@diego.wmp7dvz.mongodb.net/${nameCollection}?retryWrites=true&w=majority`;
mongoose.connect(url);

app.use(express.json());
app.use(cors());

app.use("/app", urlRouter);

app.listen(process.env.PORT, () => {
  console.log("Running server");
});

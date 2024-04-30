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

const port = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Origin",
    "https://url-shortener-7gof.vercel.app/"
  ); // Reemplaza con tu dominio de Vercel
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/test", (req, res) => {
  console.log("pasa por aca");
  res.json({ msg: "Test" });
});
app.use("/", urlRouter);

app.listen(port, () => {
  console.log("Running server on Port: ", port);
});

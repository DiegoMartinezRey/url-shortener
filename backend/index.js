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

const corsOptions = {
  origin: "https://url-shortener-puce-mu.vercel.app",
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use("/", urlRouter);

app.listen(port, () => {
  console.log("Running server on Port: ", port);
});

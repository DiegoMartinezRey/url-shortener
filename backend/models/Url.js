const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const urlSchema = new Schema(
  {
    originalUrl: { type: String, require: true },
    shortUrl: { type: String, require: true, unique: true },
  },
  {
    timestamps: true,
  }
);

const urlModel = mongoose.model("Url", urlSchema);

module.exports = urlModel;

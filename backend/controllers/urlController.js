const Url = require("../models/Url");

let listOfUrls = [
  {
    originalUrl: "google.com",
    shortUrl: "short.com",
  },
];

const urlController = {
  getAllUrls: async (req, res) => {
    try {
      const urls = await Url.find();
      res.json(urls);
    } catch (error) {
      res.status(500).send("Unable to find Url");
    }
  },
  addUrl: async (req, res) => {
    try {
      const urlToAdd = req.body;

      let link = await Url.findOne(urlToAdd);

      if (!link) {
        const url = await Url.create(urlToAdd);
        res.json(url);
      } else {
        res.json({ msg: "Url exist" });
      }
    } catch (error) {
      console.log(error);
      res.status(500).send("Unable to add Url");
    }
  },
};

module.exports = urlController;

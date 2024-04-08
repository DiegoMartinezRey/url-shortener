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
      const shortUrl = generateShortUrl();

      if (!link) {
        const url = await Url.create({
          originalUrl: urlToAdd.originalUrl,
          shortUrl,
        });
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

const generateShortUrl = () => {
  const characters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const length = 6;
  let shortUrl = "";

  for (let i = 0; i < length; i++) {
    const random = Math.floor(Math.random() * characters.length);
    shortUrl += characters[random];
  }
  return shortUrl;
};

module.exports = urlController;

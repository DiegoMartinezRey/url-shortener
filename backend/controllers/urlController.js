const Url = require("../models/Url");

const urlController = {
  getAllUrls: async (req, res) => {
    try {
      console.log("Alguien quiere saber");
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
      const shortUrl = await uniqueShortUrl();

      if (!link) {
        const url = await Url.create({
          originalUrl: urlToAdd.originalUrl,
          shortUrl,
        });
        res.json(url);
      } else {
        res.json(link);
      }
    } catch (error) {
      console.log(error);
      res.status(500).send("Unable to add Url");
    }
  },
  getUrlById: async (req, res) => {
    try {
      const shortUrl = req.params.shortUrl;
      const url = await Url.findOne({ shortUrl });

      if (url) {
        res.redirect(url.originalUrl);
      } else {
        res.json({ msg: "Url dont exist" });
      }
    } catch (error) {
      console.log(error);
      res.status(500).send("Unable to find Url");
    }
  },
};

const uniqueShortUrl = async () => {
  let shortUrl;
  let isUnique = false;

  while (!isUnique) {
    shortUrl = generateShortUrl();
    const urlsIsInDb = await Url.findOne({ shortUrl });
    if (urlsIsInDb) {
      isUnique = false;
    } else {
      isUnique = true;
    }
  }

  return shortUrl;
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

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
      console.log("Se esta pidiendo mostrar la lista de urls");
      res.json(listOfUrls);
    } catch (error) {
      res.status(500).send("Unable to find Url");
    }
  },
  addUrl: async (req, res) => {
    try {
    } catch (error) {
      res.status(500).send("Unable to add Url");
    }
  },
};

module.exports = urlController;

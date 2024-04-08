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
      res.json(listOfUrls);
    } catch (error) {
      res.status(500).send("Unable to find Url");
    }
  },
  addUrl: async (req, res) => {
    try {
      const urlToBeAdd = req.body;

      let link = await listOfUrls.find(
        (item) => item.originalUrl === urlToBeAdd.originalUrl
      );
      console.log("Link: ", link);
      if (link) {
        console.log("Url exist");
      }
      if (!link) {
        console.log("Url doesnt exist");
        listOfUrls.push(urlToBeAdd);
      }

      res.json(listOfUrls);
    } catch (error) {
      console.log(error);
      res.status(500).send("Unable to add Url");
    }
  },
};

module.exports = urlController;

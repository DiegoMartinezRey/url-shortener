const Url = require("../models/Url");

const urlController = {
  getAllUrls: async (req, res) => {
    try {
    } catch (error) {
      res.status(500).send("Unable to find activities");
    }
  },
};

module.exports = urlController;

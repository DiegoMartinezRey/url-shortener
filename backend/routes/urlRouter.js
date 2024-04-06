const express = require("express");
const urlController = require("../controllers/urlController");
const router = express.Router();

router.get("/all", urlController.getAllUrls);
router.post("/", urlController.addUrl);

module.exports = router;

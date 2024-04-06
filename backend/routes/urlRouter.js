const express = require("express");
const urlController = require("../controllers/urlController");
const router = express.Router();

router.get("/all", urlController.getAllUrls);
router.get("", urlController.addUrl);

module.exports = router;

const express = require("express");
const router = express.Router();
const getContent = require("../controller/SearchBySlugs.controller")
router.get("/Search", getContent.getData)

module.exports = router;
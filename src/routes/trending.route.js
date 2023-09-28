const express = require("express");
const router = express.Router();
const getContent = require("../controller/trending.controller")
const getRecommendedCont = require("../controller/recommended.controller") 
const getRecentCont = require("../controller/recent.controller")
const getFeaturedCont = require("../controller/featured.controller")
router.get("/trending", getContent.getTrendingContent)
router.get("/recommended", getRecommendedCont.getRecommendedContent)
router.get("/recent",getRecentCont.getRecentContent)
router.get("/featured",getFeaturedCont.getFeaturedContent)

module.exports = router;
const express = require('express');
const router = express.Router();
const AddContent = require('../controller/zadakhabar.controller');

router.post("/setContent",AddContent.setContent)
router.get("/getContent",AddContent.getContent)
module.exports = router;
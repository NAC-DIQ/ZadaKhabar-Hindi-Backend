const express = require('express');
const router = express.Router();
const AddImg = require('../controller/CKEditorImageUpload.controller');

router.post("/setImage",AddImg.CKEditorImg)
module.exports = router;

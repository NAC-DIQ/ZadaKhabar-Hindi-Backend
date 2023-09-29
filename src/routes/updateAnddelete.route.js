const express = require("express");
const router = express.Router();
const getContent = require("../controller/updateAnddelete.controller")
//const getCont = require("../controller/delete.controller")
router.put("/Update", getContent.updateFields)
router.delete("/delete", getContent.deleteFields)

module.exports = router;
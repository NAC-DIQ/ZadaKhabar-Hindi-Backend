const mongoose = require("mongoose");
const validator = require("validator");
const CKEditorImgSchema = mongoose.model("CKEditorImgUrl", {
  Image: {
    type: String,
  },
});
module.exports = CKEditorImgSchema;

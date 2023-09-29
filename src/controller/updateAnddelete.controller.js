const mongoose = require('mongoose');
const ContentSchema = require("../model/zadakhabar.model")

 exports.updateFields = async (req,res) => {
  try {
    const updateResult = await ContentSchema.findOneAndUpdate(req.query,req.body, { new: true });

    res.status(200).send("Successfully Updated");
  } catch (error) {
    console.error('Error updating fields:', error);
  }
};
exports.deleteFields = async (req,res)=>{
  try {
    const updateResult = await ContentSchema.findOneAndDelete(req.query);

    res.status(200).send("Successfully Deleted");
  } catch (error) {
    console.error('Error Deleting fields:', error);
  }
};



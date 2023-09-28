const mongoose = require("mongoose");
//const validator = require("validator");
const FeaturedSchema =new mongoose.Schema({
  
  Title:{
    type:String,
    required: true,
      
  },
  Slug:{
    type:String,
    
      
  },
  ShortDescription:{
    type:String,
    required: true,
      
  },
  MainImage:{
    type:String,
    
      
  },
  Updatedate:{
    type:Date,
   // required: true,
      
  },
  UpdateTime:{
    type:String,
   // required: true,
      
  },
 
},{
  capped: { size: 97223, max: 50, autoIndexId: true }
});
const FeaturedContent = mongoose.model("Featured" , FeaturedSchema)
module.exports = FeaturedContent;
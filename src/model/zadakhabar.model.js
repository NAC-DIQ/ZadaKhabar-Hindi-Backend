const mongoose = require("mongoose");
//const validator = require("validator");
const ContentSchema =new mongoose.Schema({
  
        CKdata:{
          type:String,
         // required: true,
            
        },
        Meta_Title:{
          type:String,
         // required: true,
            
        },
        Meta_Description:{
          type:String,
        //  required: true,
            
        },
        Title:{
          type:String,
         // required: true,
            
        },
        Description:{
          type:String,
        //  required: true,
            
        },
        Meta_Tags:{
          type:String,
         // required: true,
            
        },
        Categorie:{
          type:String,
         // required: true,
            
        },
        SubCategorie:{
          type:String,
         // required: true,
            
        },
        Posted_By:{
          type:String,
          //required: true,
            
        },
        date:{
          type:Date,
         // required: true,
            
        },
        Time:{
          type:String,
         // required: true,
            
        },
        Updatedate:{
          type:Date,
         // required: true,
            
        },
        UpdateTime:{
          type:String,
         // required: true,
            
        },
        Banner:{
          type:String,
         // required: true,
            
        },
        Featured_Image:{
          type:String,
          //required: true,
            
        },
        CategoriesSection:{
          type:String,
         // required: true,
            
        },
        Slugs:{
          type:String,
          //required: true,
            
        },
        Add_Tags:{
          type:String,
         // required: true,
            
        },
        SliderImage:{
          type:Array,
          //required: true,
            
        },
        HorizontalImage:{
          type:String,
         // required: true,
            
        },
        VerticalImage:{
          type:String,
          //required: true,
            
        },
        Slider:{
          type:String,
         // required: true,
            
        },
 
});
const content = mongoose.model("MainContent" , ContentSchema)
module.exports = content;
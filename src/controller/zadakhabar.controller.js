const content = require("../model/zadakhabar.model")
const FeaturedContent = require("../model/zadakhabar-featured.model");
const RecentContent = require("../model/zadakhabar-recent.model");
const TrendingContent = require("../model/zadakhabar-trending.model");
const RecommendedContent = require("../model/zadakhabar-recommended.model")
exports.setContent = async(req ,res) =>{

    const Content = new content(req.body);
    //For Trending Article
    if(Content.CategoriesSection ==="Trending Article "){
    const TrendingCont = new TrendingContent({
      Title : Content.Title,
      Slug : Content.Slugs,
      ShortDescription : Content.Description,
      MainImage :Content.Featured_Image,
      Updatedate:Content.Updatedate,
      UpdateTime:Content.UpdateTime,
      Categorie:Content.Categorie,
      SubCategorie:Content.SubCategorie,
    })
   await TrendingCont.save().then(() => {
     // res.status(200).send("Sucess")
  })
    .catch((e) => {
      res.status(400).send(e);
    });
  }

  //For Featured Article

  if(Content.Banner ==="Featured Post "){
    const FeaturedCont = new FeaturedContent({
      Title : Content.Title,
      Slug : Content.Slugs,
      ShortDescription : Content.Description,
      MainImage :Content.Featured_Image,
      Updatedate:Content.Updatedate,
      UpdateTime:Content.UpdateTime,
      Categorie:Content.Categorie,
      SubCategorie:Content.SubCategorie,
    })
   await FeaturedCont.save().then(() => {
     // res.status(200).send("Sucess")
  })
    .catch((e) => {
      res.status(400).send(e);
    });
  }

  //Recent Article

  if(Content.Banner ==="Recent Post "){
    const RecentCont = new RecentContent({
      Title : Content.Title,
      Slug : Content.Slugs,
      ShortDescription : Content.Description,
      MainImage :Content.Featured_Image,
      Updatedate:Content.Updatedate,
      UpdateTime:Content.UpdateTime,
      Categorie:Content.Categorie,
      SubCategorie:Content.SubCategorie,
    })
   await RecentCont.save().then(() => {
      //res.status(200).send("Sucess")
  })
    .catch((e) => {
      res.status(400).send(e);
    });
  }

  //Recommended Post
  if(Content.Banner ==="Recommended Post "){
    const RecommendedCont = new RecommendedContent({
      Title : Content.Title,
      Slug : Content.Slugs,
      ShortDescription : Content.Description,
      MainImage :Content.Featured_Image,
      Updatedate:Content.Updatedate,
      UpdateTime:Content.UpdateTime,
      Categorie:Content.Categorie,
      SubCategorie:Content.SubCategorie,
    })
   await RecommendedCont.save().then(() => {
      //res.status(200).send("Sucess")
  })
    .catch((e) => {
      res.status(400).send(e);
    });
  }


   await Content.save().then(() => {
        res.status(200).send("Success")
    })
      .catch((e) => {
        res.status(400).send(e);
      });
    
  
}

//get data
exports.getContent = async(req ,res) =>{

  try{
    const excludefields = ['sort', 'page', 'limit', 'fields']
    const queryObj = {...req.query}
    excludefields.forEach((el)=>{
      delete queryObj[el]
    })
 let query = content.find(queryObj)
 
 //Sorting logic
if(req.query.sort){
  const sortBy = req.query.sort.split(',').join(' ') // sort = Time,created date in postman
  query=query.sort(sortBy)
}else{
  query = query.sort('-Updatedate -UpdateTime')
}

//Limiting Fields
if(req.query.fields){
  const fields = req.query.fields.split(',').join(' ')//fields = Title, Description but required as {Title Description}
  query=query.select(fields) // if -fields the it will exclude it and we cannot use conclusion and exclusion together
}else{
  query=query.select('-__v')
}

//Pagination
const page = req.query.page*1 || 1;
const limit = req.query.limit*1 || 10;
//Page 1:1-10 ; Page 2:11-20
const skip = (page - 1) * limit
query = query.skip(skip).limit(limit)
if(req.query.page){
  const dataCount = await content.countDocuments();
  if(skip>=dataCount){
    throw new Error("This page is not found")
  }
}

const data = await query;

 res.status(200).json({
  status:"success",
  length:data.length,
  data:{
    data
  }
 })
}catch(err){
  res.status(404).json({
    status : 'fail',
    message: err.message
  })

}
}
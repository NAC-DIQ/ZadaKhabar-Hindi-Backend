const RecommendedContent = require("../model/zadakhabar-recommended.model")

exports.getRecommendedContent = async(req,res) =>{
    try{
        const excludefields = ['sort', 'page', 'limit', 'fields']
        const queryObj = {...req.query}
        excludefields.forEach((el)=>{
          delete queryObj[el]
        })
     let query = RecommendedContent.find(queryObj)
     
     //Sorting logic
    
      query = query.sort('-Updatedate -UpdateTime')
    
    
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
      const dataCount = await RecommendedContent.countDocuments();
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
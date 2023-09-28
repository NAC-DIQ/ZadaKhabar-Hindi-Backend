const content = require("../model/zadakhabar.model")

exports.getData = async(req,res)=>{
    //const queryObj = {...req.query}
     await content.findOne(req.query)
     .then((data)=>{
        res.status(200).send(data );
     })
     .catch((err)=>{
        console.log(err)
     })
}
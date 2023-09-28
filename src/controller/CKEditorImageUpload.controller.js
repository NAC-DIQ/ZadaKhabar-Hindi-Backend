var path = require('path');
var express = require("express")
require('dotenv').config({ path: path.join(__dirname, "../.env") });
const fileUpload = require('express-fileupload');
const app = express()
var AWS = require('aws-sdk');
const CKEditorImg = require("../model/CKEditorImageUpload.model") 
exports.CKEditorImg = (req , res) => {
    const Img = new CKEditorImg(req.body);
    //console.log(req.body.Image)
    var str0 = (req.body.Image).split(",")
    // let bin = Buffer.from(str0[1], 'base64')
    var str1 = str0[0].split("/")
    var str2 = str1[1].split(";")
    var type = str2[0]
    //let base64Data = str0[1];
    //let imgPath=path.join(__dirname, '../images/ImgImages');
    //console.log(pa)
    let imgName = Date.now();
   // require("fs").writeFileSync(`${imgPath}/${imgName}`+`.${type}`, base64Data, 'base64', function(err) {
     // console.log(err);
    //});
    //Uploading Image to S3 bucket Start
    app.use(fileUpload())
    AWS.config.update({
      region: 'ap-south-1',
  apiVersion: 'latest',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY
  }

  })
  const s3 = new AWS.S3();
  let filecontent = Buffer.from(str0[1], 'base64')
  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: `${imgName}`+`.${type}`, // File name you want to save as in S3
    ContentType:type,
    Body: filecontent 
};
s3.upload(params, function(err, data) {
  if (err) {
      throw err;
  }
});

//Uploading Image to S3 bucket end
     Img.Image = `https://zadakhabar-hindi.s3.ap-south-1.amazonaws.com/`+`${imgName}`+`.${type}`
    Img.save().then(() => {
      res.status(200).send(Img.Image)
    })
      .catch((e) => {
        res.status(400).send(e);
      });
    
  }
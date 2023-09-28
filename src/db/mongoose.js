const mongoose = require('mongoose');
var path = require('path');
require('dotenv').config({ path: path.join(__dirname, "../.env") });
const MONGOURI = process.env.MONGOURI
const LOCALURI = process.env.LOCALURI
mongoose.connect(MONGOURI, {
    // useNewUrlParser: true,
    // useCreateIndex: true
})
.then(()=>{
    console.log("Connected with Database")
})
.catch((err)=>{
    console.log(err)
})

const mongoose = require('mongoose');
const MONGOURI = "mongodb+srv://Nachiket:kv75B1KM3z7n0k42@zadakhabarhindi.xmql3gg.mongodb.net/?retryWrites=true&w=majority" 
const LOCALURI = 'mongodb://127.0.0.1:27017/ZadaKhabar-Hindi'

mongoose.connect(MONGOURI, {
    // useNewUrlParser: true,
    // useCreateIndex: true
})
.then(()=>{
    console.log("Connected with Database")
})

const express = require("express");
const path = require("path");
require("./db/mongoose");
var cors = require('cors')
require('dotenv').config({ path: path.join(__dirname, "./.env") });
const app = express();
const port = process.env.PORT || 4000 ;
app.use(cors())
const contentroute = require("./routes/zadakhabar.route")
const CKImgroute = require("./routes/CKEditorImageUpload.route") 
const SearchBySlugsroute = require("./routes/SearchBySlugs.route")
const TrendingRoute = require("./routes/trending.route")
app.use(express.json({limit: '50mb'}));
//app.use(express.urlencoded({limit: '50mb'}));

app.use("/" ,contentroute)
app.use("/",CKImgroute)
app.use("/",SearchBySlugsroute)
app.use("/",TrendingRoute)


//app.use(cors())

app.listen(port, () => {
  console.log("Server is up on port " + port);
});

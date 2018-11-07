var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var dbdata = require("../DBConnection/DBpaths");
var allModels = require("../DBConnection/allModels");
mongoose.connect(dbdata.dbPth);

var provider = express();

provider.use(bodyParser.urlencoded({ extended: true }));
provider.use(bodyParser.json());

var port = process.env.PORT || dbdata.port;
var router = express.Router();

const getUsers = require("../DBFunctions/getUsers");

router.all("/provider/getUsers", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  getUsers(req, res, next);
});

provider.use("/", router);
provider.listen(port);

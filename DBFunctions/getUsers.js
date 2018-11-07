var allModels = require("../DBConnection/allModels");
var userProfileModel = allModels.userProfileModel;

const getUser = function(req, res, next) {
  const errorText = [];
  let response = {};

  console.log("getUser service called");

  if (errorText.length > 0) {
    response = { code: "APPLICATION ERROR", message: errorText, errors: [] };
    res.json(response);
  } else {
    userProfileModel.find({}, function(err, result) {
      if (!err) {
        /*          req.query.mobileNo = result[0].mobileNo
               generateOTP(req,res,next) */

        res.json(result);
      } else {
        res.json([]);
      }
    });
  }
};

module.exports = getUser;

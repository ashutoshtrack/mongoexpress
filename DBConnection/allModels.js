var mongoose = require("mongoose");

//Client Profile Schema

let userProfileSchema = mongoose.Schema({
  userName: String,
  mobileNo: String
});

const userProfileModel = mongoose.model(
  "userProfileModel",
  userProfileSchema,
  "userProfileModel"
);

module.exports = {
  userProfileModel
};

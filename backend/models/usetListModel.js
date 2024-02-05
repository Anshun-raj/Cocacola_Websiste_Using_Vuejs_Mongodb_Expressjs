"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: {
    type: String,
    Required: "Please enter",
  },
  email: {
    type: String,
    Required: "Please enter",
  },
  //missed left last_name
  age: {
    type: String,
    Required: "Please enter",
  },

  number: {
    type: String,
    Required: "Please enter",
  },
  Created_date: {
    type: Date,
    default: Date.now,
  },
});

//one o instead of 2
module.exports = mongoose.model("Users", UserSchema);

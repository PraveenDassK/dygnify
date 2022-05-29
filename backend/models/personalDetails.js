const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let personalSchema = new Schema(
  {
    firstname: {
      type: String,
    },
    lastname: {
      type: String,
    },
    phonenumber: {
      type: String,
    },
    age: {
      type: String,
    },
    gender: {
      type: String,
    },
    address: {
      type: String,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    pincode: {
      type: String,
    },
  },
  {
    collection: "PersonalDetails",
  }
);
module.exports = mongoose.model("Student", personalSchema);

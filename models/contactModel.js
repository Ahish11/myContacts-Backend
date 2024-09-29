const mongoose = require("mongoose");

const contactSchema =new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please add the contact name"],
    },
    email: {
      type: String,
      required: [true, "please add the contact email"],
    },
    phone: {
      type: String,
      required: [true, "please add the phone no"],
    },
  },
  {
    timesStamp: true,
  }
);
//Contact -> denotes schema name
module.exports = mongoose.model("Contact", contactSchema);

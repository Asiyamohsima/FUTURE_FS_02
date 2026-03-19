const mongoose = require("mongoose");

const leadSchema = new mongoose.Schema({
  name: String,
  email: String,
  status: {
    type: String,
    default: "new"
  },
  source: String
});

module.exports = mongoose.model("Lead", leadSchema);
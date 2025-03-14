const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schemaName = new Schema({
  title: String,
  director: String,
  stars:[String],
  image: String,
  description: String,
  showtimes: [String]
});

const Model = mongoose.model("Movies", schemaName);
module.exports = Model;
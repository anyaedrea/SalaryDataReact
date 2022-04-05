const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jobSchema = new Schema({
  title: String,
  type: String,
  location: String,
  salary: Number,
  malePercent: Number,
  femalePercent: Number,
  matLeave: Number,
});

module.exports = mongoose.model("Job", jobSchema);

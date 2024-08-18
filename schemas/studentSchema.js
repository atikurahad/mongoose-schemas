const mongoose = require("mongoose");

const dataSchema = mongoose.Schema({
  name: String,
  roll: String,
  class: String,
  remarks: String,
});

const StudentsModel = mongoose.model("students", dataSchema);
module.exports = StudentsModel;

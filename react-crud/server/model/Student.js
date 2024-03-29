const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema(
  { name: { type: String }, email: { type: String }, roll: { type: Number } },
  { collection: "students" }
);

module.exports = mongoose.model("Student", studentSchema);

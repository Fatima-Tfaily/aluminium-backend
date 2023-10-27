const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const cabinetsSchema = new Schema({
  image: { type: String, required: true },
});

const Cabinets = model("Cabinets", cabinetsSchema);

module.exports = Cabinets;

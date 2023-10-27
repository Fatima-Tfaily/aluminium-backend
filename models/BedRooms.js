const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const facadesSchema = new Schema({
  image: { type: String, required: true },
});

const Facades = model("Facade", facadesSchema);

module.exports = Facades;

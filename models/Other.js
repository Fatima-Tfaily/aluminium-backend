const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const otherSchema = new Schema({
  image: { type: String, required: true },
});

const Other = model("Other", otherSchema);

module.exports = Other;

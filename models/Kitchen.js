const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const kitchenSchema = new Schema({
  image: { type: String, required: true },
});

const Kitchen = model("Kitchen", kitchenSchema);

module.exports = Kitchen;

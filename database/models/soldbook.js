const mongoose = require("mongoose");

const soldBookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  condition: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  seller_mail: {
    type: String,
    required: true,
  },
  seller_name: {
    type: String,
    required: true,
  },
  buyer_mail: {
    type: String,
    required: true,
  },
  buyer_name: {
    type: String,
    required: true,
  },
  seller_id: {
    type: String,
    required: true,
  },
  adress: {
    type: String,
    required: true,
  },
  landmark: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  pin: {
    type: Number,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
});

export default mongoose.models.Soldbook ||
  mongoose.model("Soldbook", soldBookSchema);

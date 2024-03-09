const mongoose = require("mongoose");

const TravelPackageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a package name"],
    maxlength: 50,
  },
  country: {
    type: String,
    required: [true, "Please provide the right country for the package"],
    maxlength: 50,
  },
  duration: {
    type: String,
    required: [true, "Please provide the right country for the package"],
    maxlength: 20,
  },
  price: {
    type: Number,
    required: [true, "Please provide the package price"],
  },
  minAge: {
    type: Number,
    required: [true, "Please provide  the package minimum age allowed"],
  },
  difficulty: {
    type: String,
    required: [true, "Please provide package difficulty"],
    maxlength: 10,
  },
  shortDescription: {
    type: String,
    required: [true, "Please provide a description for the package"],
    maxlength: 500,
  },
  longDescription: {
    type: String,
    required: [true, "Please provide a detailed description for the package"],
    maxlength: 2000,
  },
});

module.exports = mongoose.model("travelPackage", TravelPackageSchema);

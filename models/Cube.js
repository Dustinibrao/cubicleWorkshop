const mongoose = require("mongoose");

const cubeSchema = new mongoose.Schema({
	Name: String,
	Description: String,
	ImageURL: String,
	DifficultyLevel: Number,
});
const Cube = mongoose.model("Cube", cubeSchema);

module.exports = Cube; //has to stay at bottom

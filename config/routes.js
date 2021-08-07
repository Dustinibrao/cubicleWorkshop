// TODO: Require Controllers...
const bodyParser = require("body-parser");
const express = require("express")(); //was const app =
const Cube = require("../models/Cube");

module.exports = (app) => {
	// TODO...
	app.get("/", (req, res) => {
		res.render("index");
	});
	app.get("/about", (req, res) => {
		res.render("about");
	});
	app.get("/create", (req, res) => {
		res.render("create");
	});
	app.post("/create", (req, res) => {
		const newCube = new Cube({
			Name: "testCube",
			Description: "square",
			ImageURL: "stringURL",
			DifficultyLevel: 69,
		});
		console.log(newCube);
		newCube.save(function (err, newCube) {
			if (err) return console.error(err);
			console.log("cube was saved");
		});
		res.send("sent");
	});
	app.get("/details/:id", function (req, res) {
		// res.render('details/:id')
		res.send(`<h1> No data yet, id is ${req.params.id} </h1>`);
	});
	app.get("/*", (req, res) => {
		res.render("404");
	});
};

const bodyParser = require("body-parser");
const app = require("express")(); //was const app =
const Cube = require("../models/Cube");
const Accessory = require("../models/Accessory");

module.exports = (app) => {
	app.get("/", (req, res) => {
		Cube.find(function (err, cubes) {
			console.log(cubes);
			if (err) return console.log(err);
			res.render("index", { cubes });
		});
	});

	app.get("/about", (req, res) => {
		res.render("about");
	});
	app.get("/create", (req, res) => {
		res.render("create");
	});
	app.post("/create", (req, res) => {
		const newCube = new Cube(req.body);
		console.log(newCube);
		newCube.save(function (err, newCube) {
			if (err) return console.error(err);
			console.log("cube was saved");
		});
		res.redirect(301, "/");
		//res.render("index");
	});
	app.get("/details/:id", async function (req, res) {
		await Cube.findById(req.params.id, function (err, id) {
			res.render("details", { cube: id });
		});
	});

	app.get("/create/accessory", function (req, res) {
		res.send(`<h1> No data yet, id is ${req.params.id} </h1>`);
	});
	app.get("/attach/accessory/:id", function (req, res) {
		res.send(`<h1> No data yet, id is ${req.params.id} </h1>`);
	});
	app.get("/*", (req, res) => {
		res.render("404");
	});
};

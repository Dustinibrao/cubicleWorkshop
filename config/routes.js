// TODO: Require Controllers...
const bodyParser = require("body-parser");
const app = require("express")();

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
	app.get("/details/:id", (req, res) => {
		res.render("details");
	});
};

// TODO: Require Controllers...
const bodyParser = require("body-parser");
const express = require("express")();

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
		res.send("sent");
	});
	app.get("/details/:id", (req, res) => {
		res.render("details");
	});
	app.get("/*", (req, res) => {
		res.render("404");
	});
};

const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const path = require("path");

module.exports = (app) => {
	//TODO: Setup the view engine
	app.set("view engine", "hbs");
	app.engine(
		"hbs",
		exphbs({
			extname: "hbs",
			defaultLayout: "",
			layoutsDir: __dirname + "/views",
			partialsDir: __dirname + "/views",
		})
	);

	//TODO: Setup the body parser
	app.use(bodyParser.urlencoded({ extended: true }));

	//TODO: Setup the static files
	app.use(express.static("static"));
};

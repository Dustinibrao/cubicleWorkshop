const express = require("express");
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const path = require("path");

module.exports = (app) => {
	//TODO: Setup the view engine

	//TODO: Setup the body parser

	//TODO: Setup the static files
	app.use(express.static("static"));
};

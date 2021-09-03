const bodyParser = require("body-parser");
const app = require("express")(); //was const app =
const Cube = require("../models/Cube");
const User = require("../models/User");
const Accessory = require("../models/Accessory");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
app.use(cookieParser());

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
		Cube.findById(req.params.id, function (err, cube) {
			console.log("Cube", cube);
		});
		res.render("attachAccessory", {cube});
	});
	app.get("/login", (req, res) => {
		res.render("loginPage");
	});
	app.post("/login", async (req, res) => {
		// const newUser = new User(req.body);
		// console.log(newUser);
		// newUser.save(function (err, newUser) {
		// 	if (err) return console.error(err);
		// 	console.log("user was saved");
		console.log("logging in ", req.body);
		let myUser = await User.findOne({ username: req.body.username }).exec();
		console.log(myUser);
		bcrypt.compare(req.body.password, myUser.password, function (err, res) {
			console.log(res);
		});
		const token = jwt.sign({ id: User._id }, "Big Secret", {
			expiresIn: "2d",
		});
		console.log(token);
		res.cookie("token", token);
		res.redirect(301, "/");
	});
	app.get("/register", (req, res) => {
		res.render("registerPage");
	});

	app.post("/register", async function (req, res) {
		const salt = 6;
		await bcrypt.hash(req.body.password, salt, function (err, hash) {
			const newUser = new User({
				username: req.body.username,
				password: hash,
			});
			console.log(newUser);
			newUser.save(function (err, newUser) {
				if (err) return console.log(err);
				console.log("User saved");
				res.redirect("/login");
			});
		});
	});
	app.get("/logout", (req, res) => {
		res.render("logout");
	});
	app.get("/*", (req, res) => {
		res.render("404");
	});
};

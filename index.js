const env = process.env.NODE_ENV || "development";
const exphbs = require("express-handlebars");
const config = require("./config/config")[env];
const app = require("express")();
const mongoose = require("mongoose");

require("./config/express")(app);
require("./config/routes")(app);

mongoose
	.connect(
		"mongodb+srv://cluster0.8mmaf.mongodb.net/?retryWrites=true&w=majority",
		{
			dbName: "cubicle",
			user: "dustin",
			pass: "Gecko123",
			useNewUrlParser: true,
			useUnifiedTopology: true,
		}
	)
	.then((res) => console.log("db connected"))
	.catch((err) => console.log(err));

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
	// we're connected!
	console.log("Testing ongoose db.once method");
});
app.listen(
	config.port,
	console.log(`Listening on port ${config.port}! Now its up to you...`)
);

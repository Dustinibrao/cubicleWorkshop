const env = process.env.NODE_ENV || "development";
const exphbs = require("express-handlebars");
const config = require("./config/config")[env];
const app = require("express")();

require("./config/express")(app);
require("./config/routes")(app);
app.set("view engine", "hbs");
app.engine(
	"hbs",
	exphbs({
		extname: "hbs",
		defaultLayout: "index",
		layoutsDir: __dirname + "/views",
	})
);

app.listen(
	config.port,
	console.log(`Listening on port ${config.port}! Now its up to you...`)
);

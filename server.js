//requirements
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var db = require("./models");

//add port
var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(methodOverride("_method"));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./controllers/petsController.js")(app);
require("./controllers/fosterController.js")(app);
require("./controllers/adoptionController.js")(app);
require("./controllers/html-Controller.js")(app);
require("./controllers/post-apiController.js")(app);
require("./controllers/author-apiController.js")(app);

// syncing sequelize models and then starting express app
db.sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });
});
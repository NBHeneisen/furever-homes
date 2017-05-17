// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

    app.get("/cms", function(req, res) {
        res.render("foster_home_details");
    });

    // blog route loads blog.html
    app.get("/blog", function(req, res) {
        res.render("admin_page");
    });

    // authors route loads author-manager.html
    app.get("/authors", function(req, res) {
        res.render("foster_home_edit");
    });

};
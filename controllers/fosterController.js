//requirements
var express = require("express");
var db = require("../models");
//var router = express.Router();

//controller for foster homes
module.exports = function(app) {

//     //display signup page
//     router.get("/signup", function(req, res) {
//         var hbsObject = {BadPassword: true, baderror: "Incorrect Password"};
//         return res.render("signup", hbsObject);
//     });

//    //display login page
//     router.get("/login", function(req, res) {
//         var hbsObject = {BadPassword: true, baderror: "Incorrect Password"};
//         return res.render("login", hbsObject);
//     });

//     //display index page
//     router.get("/index", function(req, res) {
//         var hbsObject = {BadPassword: true, baderror: "Incorrect Password"};
//         return res.render("index", hbsObject);
//     });

//     //display customer results
//     router.get("/search", function(req, res) {
//         var hbsObject = {BadPassword: true, baderror: "Incorrect Password"};
//         return res.render("customer_results", hbsObject);
//     });

//     //display contact page
//     router.get("/contact", function(req, res) {
//         var hbsObject = {BadPassword: true, baderror: "Incorrect Password"};
//         return res.render("foster_home_details", hbsObject);
//     });

    //display foster home information on foster home page
    app.get("/foster_home/:id", function (req, res) {
        db.Foster.findAll({

            where: {
                id: req.params.id
            }
        }).then(function(dbPets) {
            res.render("index", {result:dbPets});
        });
    });


    //add new foster home information
    app.post("/add_foster_home", function (req, res) {
        db.Foster.Create({
            fosterHome: req.body.fosterHome,
            fosterParents: req.body.fosterParents,
            address: req.body.address,
            county: req.body.county,
            contact: req.body.contact,
            email: req.body.email,
            hours: req.body.hours,
            website: req.body.website,
            image: req.body.image,
            active: true
        }).then(function(dbFoster) {
            res.redirect("/admin");
        }).catch(function (error) {
            console.log(error.message);
            res.status(500).json({error: error.message});
        });
    });


};
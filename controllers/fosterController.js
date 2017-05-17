//requirements
var express = require("express");
var db = require("../models");

//controller for foster homes
module.exports = function(app) {

    





    // //display foster home information on foster home page
    // app.get("/login", function(req, res) {
    //     res.render("login");
    // })

    // app.get("/signup", function(req, res) {
    //     res.render("signup");
    // })

    // app.get("/foster_home/:id", function(req, res) {
    //     db.fosterHome.findAll({
    //         where: {
    //             id: req.params.id
    //         }
    //     }).then(function(dbPets) {
    //         res.render("foster_home_edit", {result:dbPets});
    //     });
    // });

    // //signup for foster home
    // app.post("/authors", function (req,res) {
        
    // })

    // //add new foster home information
    // app.post("/add_foster_home", function(req, res) {
    //     db.Foster.Create({
    //         fosterHome: req.body.fosterHome,
    //         fosterParents: req.body.fosterParents,
    //         address: req.body.address,
    //         county: req.body.county,
    //         contact: req.body.contact,
    //         email: req.body.email,
    //         hours: req.body.hours,
    //         website: req.body.website,
    //         image: req.body.image,
    //         active: true
    //     }).then(function(dbFoster) {
    //         res.redirect("/foster_home_edit");
    //     }).catch(function (error) {
    //         console.log(error.message);
    //         res.status(500).json({ error: error.message });
    //     });
    // });
};
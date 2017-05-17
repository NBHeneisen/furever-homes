//requirements
var express = require("express");
var db = require("../models");

//controller for potential adopters
module.exports = function(app) {

    app.get("/", function(req,res) {
        res.render("index");
    });

    app.get("/index", function (req, res) {
        res.render("index");
    });

    app.get("/find", function(req, res) {
        db.Pets.findAll({
            where: {
                species: req.body.species,
                age: req.body.age,
                gender: req.body.gender,
                temper: req.body.temperament
            }
        }).then(function(dbPets) {
            res.render("customer_results", {result: dbPets});
        });
    });

    // app.get("/find", function(req, res) {

    //     res.render("customer_results");
    // });

    // //display pet information of a specific foster home to foster home admin page
    // app.get("/admin", function(req, res) {
    //     db.Pets.findAll({
    //         where: {
    //             id: req.params.id //not sure this is right
    //         }
    //     })
    // });
};
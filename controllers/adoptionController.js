//requirements
var express = require("express");
var db = require("../models");

//controller for potential adopters
module.exports = function(app) {

    app.get("/", function(req, res) {
        res.render("index");
    });

    app.get("/index", function(req, res) {
        res.render("index");
    });

      app.post("/find", function(req, res) {
        db.Pets.findAll({
            where: {
                species: req.body.species,
                age: req.body.age,
                gender: req.body.gender,
                temper: req.body.temper
            },
            include: [db.FosterHome]
        }).then(function(dbPets) {
            console.log("search results", dbPets);
            res.render("customer_results", { result: dbPets });
        });
    });

    app.get("/find", function(req, res) {
        res.render("customer_results");
    });
};
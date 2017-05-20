//requirements
var express = require("express");
var db = require("../models");

//controller for potential adopters
module.exports = function(app) {

<<<<<<< HEAD
    app.get("/", function(req, res) {
        res.render("index");
    });

    app.get("/index", function(req, res) {
        res.render("index");
    });

      app.post("/find", function(req, res) {
=======
<<<<<<< HEAD
    //display pets data on main page
    app.get("/", function(req, res) {
        db.Pets.findAll({}).then(function(dbPets) {
            res.render("index", { result: dbPets });
        });
    });

    //display pets data searched for by user
    app.post("/find", function(req, res) {
        console.log("request", req.body);
        db.Pets.findAll({
            where: {
                species: req.body.animalType,
                age: req.body.animalAge,
                gender: req.body.animalGender,
                temper: req.body.animalTemp
=======
    //display main page
    app.get("/", function (req, res) {
        res.render("index");
    });

    app.get("/index", function (req, res) {
        res.render("index");
    });

    //display pets data searched for by user
    app.get("/search", function (req, res) {
>>>>>>> fd8271e48aa8da210c329ea9bc0cd77582306ae6
        db.Pets.findAll({
            where: {
                species: req.body.species,
                age: req.body.age,
                gender: req.body.gender,
<<<<<<< HEAD
                temper: req.body.temper
            },
            include: [db.FosterHome]
        }).then(function(dbPets) {
            console.log("search results", dbPets);
=======
                temper: req.body.temperament
>>>>>>> 9da5e215c4d5fe36480bc247949443bec5a2e7b9
            }
        }).then(function(dbPets) {
>>>>>>> fd8271e48aa8da210c329ea9bc0cd77582306ae6
            res.render("customer_results", { result: dbPets });
        });
    });

    app.get("/find", function(req, res) {

        res.render("customer_results");
<<<<<<< HEAD
    });

    // //display pet information of a specific foster home to foster home admin page
    // app.get("/admin", function(req, res) {
    //     db.Pets.findAll({
    //         where: {}
    //     })
    // });
=======
    });

    //display pet information of a specific foster home to foster home admin page
<<<<<<< HEAD
    app.get("/admin", function(req, res) {
        db.Pets.findAll({
            where: {
                id: req.params.id //not sure this is right
            }
        })
    });
=======
    // app.get("/admin", function (req,res) {
    //     db.Pets.findAll({
    //         where: {
    //             //needs to join tables by foster home ID
    //         }
    //     });
    // });
>>>>>>> 9da5e215c4d5fe36480bc247949443bec5a2e7b9
>>>>>>> fd8271e48aa8da210c329ea9bc0cd77582306ae6
};
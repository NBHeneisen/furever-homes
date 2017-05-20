var express = require("express");
var router = express.Router();
var db = require("../models");

//pets controller
module.exports = function(app) {

    //post pet information to the database from the admin screen
    app.post("/add_pet", function(req, res) {
<<<<<<< HEAD
        console.log("I'm adding this to pets", req.body);
=======
>>>>>>> fd8271e48aa8da210c329ea9bc0cd77582306ae6
        db.Pets.create({
            name: req.body.name,
            species: req.body.species,
            age: req.body.age,
            gender: req.body.gender,
            temper: req.body.temper,
            image: req.body.image,
            description: req.body.description,
            FosterHomeId: req.body.id
        }).then(function(dbPets) {
<<<<<<< HEAD
            console.log(dbPets);
            db.FosterHome.findOne({
                    where: {
                        id: req.body.id
                    },
                    include: [db.Pets]
                })
                .then(function(foster) {
                    var hbsObject = foster.dataValues;
                    res.render("landing", hbsObject);
                });
=======
            res.redirect("/admin")
>>>>>>> fd8271e48aa8da210c329ea9bc0cd77582306ae6
        }).catch(function(error) {
            console.log(error.message);
            res.status(500).json({ error: error.message });
        });
    });

<<<<<<< HEAD
    //delete pet 
    app.post("/delete_pet", function(req, res) {
        console.log("DELETE REQUEST", req.body);
        //DELETE FROM PETS WHERE ID = ID
        db.Pets.destroy({
            where: {
                id: req.body.id
            }
        }).then(function(dbPets) {
        });
    });

    //edit pet 
    app.post("/update_pet", function(req, res) {
        console.log("UPDATE REQUEST", req.body);

        //UPDATE FROM PETS WHERE ID = ID
        db.Pets.update({
            name: req.body.name,
            species: req.body.species,
            age: req.body.age,
            gender: req.body.gender,
            temper: req.body.temper,
            description: req.body.description,
            image: req.body.image
        }, {
            where: {
                id: req.body.id
            }
        }).then(function(dbPets) {
            console.log("!!!!REQ BODY" , req.body);
            console.log("!!!!DB" , dbPets);
            db.FosterHome.findOne({
                    where: {
                        id: req.body.foster_id
                    },
                    include: [db.Pets]
                })
                .then(function(foster) {
                    var hbsObject = foster.dataValues;
                    res.render("landing", hbsObject);
                });
=======
    //edit pet information from admin page
<<<<<<< HEAD
>>>>>>> fd8271e48aa8da210c329ea9bc0cd77582306ae6

        });
    });
};
=======
    
};
>>>>>>> 9da5e215c4d5fe36480bc247949443bec5a2e7b9

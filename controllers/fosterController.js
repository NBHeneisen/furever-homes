//requirements
var express = require("express");
var db = require("../models");
<<<<<<< HEAD
var bcrypt = require("bcrypt");
=======
>>>>>>> fd8271e48aa8da210c329ea9bc0cd77582306ae6

//controller for foster homes
module.exports = function(app) {

<<<<<<< HEAD
    //display foster home information on foster home page

    app.get("/login", function(req, res) {
=======
<<<<<<< HEAD
    //display foster home information on foster home page

    app.get("/login", function(req, res) {
=======
    app.get("/login", function (req, res) {
>>>>>>> 9da5e215c4d5fe36480bc247949443bec5a2e7b9
>>>>>>> fd8271e48aa8da210c329ea9bc0cd77582306ae6
        res.render("login");
    })

    app.get("/signup", function(req, res) {
        res.render("signup");
    })

<<<<<<< HEAD
    app.get("/admin", function(req, res) {
        db.FosterHome.findOne({
            where: {
                id: req.params.id
            }
        }).then(function(dbFoster) {
            res.render("admin_page", { result: id });
=======
    app.get("/foster_home/:id", function(req, res) {
        db.fosterHome.findAll({
            where: {
                id: req.params.id
            }
        }).then(function(dbPets) {
            res.render("index", { result: dbPets });
>>>>>>> fd8271e48aa8da210c329ea9bc0cd77582306ae6
        });
    });


    //collect initial signup info
    app.post("/signup/", function(req, res) {
        console.log("sign up request body", req.body)
        var saltRounds = 10;
        var hash = bcrypt.hashSync(req.body.password, saltRounds);
        console.log(hash);

        db.FosterHome.create({
                userName: req.body.userName,
                password: req.body.password,
                active: true,
                fosterHome: req.body.fosterHome,
                fosterParents: req.body.fosterParents,
                address: req.body.address,
                county: req.body.county,
                contact: req.body.contact,
                email: req.body.email,
                hours: req.body.hours,
                website: req.body.website,
                image: req.body.image
            }).then(function(dbFoster) {
                console.log("dbFoster", dbFoster.userName);
                db.FosterHome.findOne({
                        where: {
                            userName: dbFoster.userName,
                            password: dbFoster.password
                        },
                        include: [db.Pets]
                    })
                    .then(function(foster) {
                        if (!foster) {
                            console.log("User not found");
                            res.status(400).json({
                                'status': 'Invalid Username or Password'
                            })
                        } else {
                            bcrypt.compare(req.body.password, foster.password, function(err, res) {
                                if (err) {
                                    res.status(400).json({
                                        'status': 'Invalid Username or Password'
                                    });
                                }
                            });
                            var hbsObject = foster.dataValues;
                            res.render("landing", hbsObject);
                        }
                    });
            })
            .catch(function(error) {
                console.log(error.message);
                res.status(500).json({ error: error.message });
            });
    });

    //add new foster home information
<<<<<<< HEAD
    app.post("/foster_edit", function(req, res) {
        var saltRounds = 10;
        var hash = bcrypt.hashSync(req.body.password, saltRounds);
        console.log(hash);
        db.FosterHome.Create({
            userName: req.body.userName,
            password: hash,
=======
    app.post("/add_foster_home", function(req, res) {
        db.Foster.Create({
>>>>>>> fd8271e48aa8da210c329ea9bc0cd77582306ae6
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
        }).catch(function(error) {
            console.log(error.message);
            res.status(500).json({ error: error.message });
<<<<<<< HEAD
        });
    });

    app.post("/signin", function(req, res) {
        console.log("hit signup route");
        console.log("req.body", req.body);
        db.FosterHome.findOne({
                where: {
                    userName: req.body.username,
                    password: req.body.password
                },
                include: [db.Pets]
            })
            .then(function(foster) {
                if (!foster) {
                    console.log("User not found");
                    res.status(400).json({
                        'status': 'Invalid Username or Password'
                    })
                } else {
                    bcrypt.compare(req.body.password, foster.password, function(err, res) {
                        if (err) {
                            res.status(400).json({
                                'status': 'Invalid Username or Password'
                            });
                        }
                    });
                    var hbsObject = foster.dataValues;
                    res.render("landing", hbsObject);
                }
            });
    });

    app.get("/signin", function(req, res) {
        console.log("hit signup GET route");
        console.log("req.body", req.body);
        db.FosterHome.findOne({
                where: {
                    id: req.body.FosterHomeId
                },
                include: [db.Pets]
            })
            .then(function(foster) {
                var hbsObject = foster.dataValues;
                res.render("landing", hbsObject);
            });
    });

        //edit pet 
    app.post("/update_foster", function(req, res) {
        console.log("UPDATE REQUEST", req.body);

        //UPDATE FROM PETS WHERE ID = ID
        db.FosterHome.update({
            fosterHome: req.body.fosterHome,
            fosterParents: req.body.fosterParents,
            address: req.body.address,
            county: req.body.county,
            contact: req.body.contact,
            email: req.body.email,
            hours: req.body.hours,
            website: req.body.website,
            image: req.body.image,
        }, {
            where: {
                id: req.body.id
            }
        }).then(function(dbFosterHome) {
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
>>>>>>> fd8271e48aa8da210c329ea9bc0cd77582306ae6
        });
    });



};

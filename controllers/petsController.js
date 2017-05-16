var express = require("express");
var router = express.Router();

//pets controller
module.exports = function(app) {

    //post pet information to the database from the admin screen
    app.post("/add_pet", function(req, res) {
        db.Pets.create({
            name: req.body.name,
            species: req.body.species,
            breed: req.body.breed,
            age: req.body.age,
            gender: req.body.gender,
            temperament: req.body.temperament,
            description: req.body.description
        }).then(function(dbPets) {
            res.redirect("/admin")
        }).catch(function(error) {
            console.log(error.message);
            res.status(500).json({ error: error.message });
        });
    });

    //edit pet information from admin page
<<<<<<< HEAD

};
=======
    
};
>>>>>>> 9da5e215c4d5fe36480bc247949443bec5a2e7b9

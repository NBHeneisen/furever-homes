module.exports = function(sequelize, DataTypes) {
<<<<<<< HEAD
    // Define the Pets Sequelize model
    // Define the Pets Sequelize model
    var Pets = sequelize.define("Pets", {
        // Pet Name
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        //Species
        species: {
            type: DataTypes.STRING,
            allowNull: false
        },
=======
  // Define the Pets Sequelize model
  var Pets = sequelize.define("Pets", 
    {
      // Pet Name
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
  //Species
      species: {
        type: DataTypes.STRING,
        allowNull: false
      },
>>>>>>> 9da5e215c4d5fe36480bc247949443bec5a2e7b9

        age: {
            type: DataTypes.STRING,
            allowNull: false
        },

        temper: {
            type: DataTypes.STRING,
            allowNull: false
        },

        gender: {
            type: DataTypes.STRING,
            allowNull: false
        },

        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
        },
        // Available
        available: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    }, {
        classMethods: {
            associate: function(models) {
                    Pets.belongsTo(models.FosterHome, {
                        foreignKey: {
                            allowNull: true
                        }
                    });
                }
                // associate: function(models) {
                //     FosterHome.hasMany(models.Pets, {
                //         foreignKey: {
                //             allowNull: true
                //         }
                //     });
                // }
        }
    });
    return Pets;
};
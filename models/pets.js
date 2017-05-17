module.exports = function(sequelize, DataTypes) {
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
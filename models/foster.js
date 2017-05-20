module.exports = function(sequelize, DataTypes) {
<<<<<<< HEAD

    // Define the Foster Sequelize model
    var FosterHome = sequelize.define("FosterHome", {
        // Name
        userName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [6, 20]
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        fosterHome: {
            type: DataTypes.STRING
        },
=======
  
  // Define the Foster Sequelize model
  var FosterHome = sequelize.define("FosterHome", 
    {
      // Name
        userName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
        fosterHome: {
        type: DataTypes.STRING,
        allowNull: false
      },
>>>>>>> fd8271e48aa8da210c329ea9bc0cd77582306ae6
        fosterParents: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        county: {
            type: DataTypes.STRING,
            allowNull: false
        },

        contact: {
            type: DataTypes.STRING,
            allowNull: false
        },

        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        hours: {
            type: DataTypes.STRING,
            allowNull: false
        },
        website: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING
        },
        active: {
            type: DataTypes.BOOLEAN
        },
    }, {
        classMethods: {
            associate: function(models) {
                FosterHome.hasMany(models.Pets, {
                    onDelete: "cascade"
                });
            }
        }
<<<<<<< HEAD
    });
    return FosterHome;
};
=======
      }
    );
  return FosterHome;
};
>>>>>>> fd8271e48aa8da210c329ea9bc0cd77582306ae6

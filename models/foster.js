module.exports = function(sequelize, DataTypes) {
  
  // Define the Foster Sequelize model
  var FosterHome = sequelize.define("FosterHome", 
    {
      // Name
        userName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [6,20]
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
        fosterHome: {
        type: DataTypes.STRING
      },
        fosterParents: {
            type: DataTypes.STRING
        },
        address: {
            type: DataTypes.STRING
        },
        county: {
            type: DataTypes.STRING
        },

        contact: {
            type: DataTypes.STRING
        },

        email: {
            type: DataTypes.STRING
        },
        hours: {
            type: DataTypes.STRING
        },
      website: {
        type: DataTypes.STRING
      },
      image: {
        type: DataTypes.STRING
      },   
      active: {
        type: DataTypes.BOOLEAN
  },
    },
      {
        classMethods: {
          associate: function(models) {
            FosterHome.hasMany(models.Pets, {
              onDelete: "cascade"
            });
          }
        }
      }
    );
  return FosterHome;
};

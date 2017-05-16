module.exports = function(sequelize, DataTypes) {
  
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
        type: DataTypes.STRING,
      },   
      active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
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

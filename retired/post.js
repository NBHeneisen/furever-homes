module.exports = function(sequelize, DataTypes) {
    // Define the Foster Sequelize model
    var FosterHome = sequelize.define("FosterHome", {

        // fosterHome: {
        //        type: DataTypes.STRING,
        //        allowNull: true
        //    },
        //Name
        userName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: true
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
            allowNull: false
        },
        image2: {
            type: DataTypes.STRING,
            allowNull: true
        },
        image3: {
            type: DataTypes.STRING,
            allowNull: true
        },
        active: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }, {
        classMethods: {
            associate: function(models) {
                FosterHome.belongsTo(models.Account, {
                    onDelete: "cascade"
                });
            }
        }
    });
    return FosterHome;
};
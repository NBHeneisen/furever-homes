module.exports = function(sequelize, DataTypes) {
    var Account = sequelize.define("Account", {
            // Giving the Author model a name of type STRING
            name: {
                type: DataTypes.STRING
            },
            password: {
                type: DataTypes.STRING
            }

        },
        // Here we'll pass a second "classMethods" object into the define method
        // This is for any additional configuration we want to give our models
        {
            // We're saying that we want our Accounts to have FosterHomes
            classMethods: {
                associate: function(models) {
                    // Associating Author with Posts
                    // When an Author is deleted, also delete any associated Posts
                    Account.hasOne(models.FosterHome, {
                        onDelete: "cascade"
                    });

                }
            }
        }
    );
    return Account;
};
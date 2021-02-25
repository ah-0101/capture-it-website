'use strict';
module.exports = (sequelize, DataTypes) => {
    const ProductMaker = sequelize.define('ProductMaker', {
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        productId: DataTypes.INTEGER
    }, {});
    ProductMaker.associate = function(models) {
        ProductMaker.belongsTo(models.User, { foreignKey: 'userId' })
        ProductMaker.belongsTo(models.Product, { foreignKey: 'productId' })
    };
    return ProductMaker;
};
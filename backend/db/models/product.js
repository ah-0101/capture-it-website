'use strict';
module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
        picture: DataTypes.STRING,
        description: DataTypes.STRING
    }, {});
    Product.associate = function(models) {

    };
    return Product;
};
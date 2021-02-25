'use strict';
module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
        picture: DataTypes.STRING,
        description: DataTypes.STRING
    }, {});
    Product.associate = function(models) {
        const columnMapping = {
            through: 'ProductMakers',
            other: 'userId',
            foreignKey: 'productId'
        }
        Product.belongsToMany(models.User, columnMapping)
        Product.hasMany(models.Comment, { foreignKey: 'productId' })
    };
    return Product;
};
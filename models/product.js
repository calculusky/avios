const Sequelize = require('sequelize');
const sequelize = require('../utils/database');

//create database schema for the products
const Product = sequelize.define('product', {
    id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true
    },
    product_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    product_description: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    product_varieties: { 
        type: Sequelize.TEXT, 
        allowNull: false,
        get: function() {
            return JSON.parse(this.getDataValue('product_varieties'));
        }, 
        set: function(val) {
            return this.setDataValue('product_varieties', JSON.stringify(val));
        }
    }
});

module.exports = Product;
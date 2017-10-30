const Sequelize = require('sequelize');
const db = require('../db');
const Category = require('./Category');

const Product = db.define('product', {
    title: {
      type: Sequelize.STRING,
      allowNull: false
    },
    description: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    photos: {
      type: Sequelize.ARRAY(Sequelize.STRING)
    },
    price: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false
    },
    quantity: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    available:  {
      type: Sequelize.BOOLEAN
    }

  }, {
    defaultScope: {
      include: [{model: Category}]
    }
  }
)

module.exports = Product;

//Method to edit the quantity of a product
/**
 * instanceMethods
 */
Product.prototype.changeQuantity= function (amount) {
  return this.quantity += amount;
}

const { DataTypes } = require('sequelize');
const sequelize = require('../db/db');
const User = require('./User');

const Order = sequelize.define('Order', {
  amount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
});


Order.belongsTo(User);

module.exports = Order;

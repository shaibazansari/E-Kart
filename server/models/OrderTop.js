const { DataTypes } = require('sequelize');
const sequelize = require('../db/db');
const Order = require('./Order');

const OrderTop = sequelize.define('OrderTop', {
  top_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

OrderTop.belongsTo(Order); 

module.exports = OrderTop;

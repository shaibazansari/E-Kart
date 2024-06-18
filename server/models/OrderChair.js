const { DataTypes } = require('sequelize');
const sequelize = require('../db/db');
const Order = require('./Order');

const OrderChair = sequelize.define('OrderChair', {
  chair_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

OrderChair.belongsTo(Order); 

module.exports = OrderChair;

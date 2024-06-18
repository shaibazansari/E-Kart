const { DataTypes } = require('sequelize');
const sequelize = require('../db/db');
const Order = require('./Order');

const OrderTable = sequelize.define('OrderTable', {
  table_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

OrderTable.belongsTo(Order);

module.exports = OrderTable;

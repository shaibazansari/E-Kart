const User = require("../models/User");
const Order = require("../models/Order");
const OrderChair = require("../models/OrderChair");
const OrderTable = require("../models/OrderTable");
const OrderTop = require("../models/OrderTop");

const createOrder = async (req, res) => {
  const { user, amount, items } = req.body;

  if (!user.name || !user.email || !items || !items.length) {
    return res
      .status(400)
      .json({ message: "Please provide all the information" });
  }

  try {
    const user_obj = await User.create({ name: user.name, email: user.email });
    const order = await Order.create({ amount: amount, UserId: user_obj.id });

    let orderChairs = [];
    let orderTables = [];
    let orderTops = [];

    for (const item of items) {
      if (item.category === "Chairs") {
        orderChairs.push({
          OrderId: order.id,
          chair_id: item.id,
        });
      } else if (item.category === "Tables") {
        orderTables.push({
          OrderId: order.id,
          table_id: item.id,
        });
      } else if (item.category === "Tops") {
        orderTops.push({
          OrderId: order.id,
          top_id: item.id,
        });
      }
    }

    await Promise.all([
      OrderChair.bulkCreate(orderChairs),
      OrderTable.bulkCreate(orderTables),
      OrderTop.bulkCreate(orderTops),
    ]);

    res.status(201).json({ message: "Order placed successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message:
        "Due to some issue the order could not be placed. Please try again later.",
    });
  }
};

module.exports = {
  createOrder,
};

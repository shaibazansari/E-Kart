const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const productRouter = require("./routes/productRoutes");
const orderRouter = require("./routes/orderRoutes");

const app = express();

app.use(express.json());
app.use(
  cors({
    credentials: true,
  })
);
app.use(cookieParser());

app.use("/api/products", productRouter);
app.use("/api/orders", orderRouter);

app.use((req, res) => {
  res.status(404).send("404 Not Found");
});

module.exports = app;

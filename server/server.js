const dotenv = require("dotenv");
const sequelize = require("./db/db");

process.on("uncaughtException", (err) => {
  console.log("UNHANDLED REJECTION! shutting down..");
  console.log(err.name, err.message);
  process.exit(1);
});

dotenv.config({ path: "./config.env" });

const app = require("./app");

sequelize
  .authenticate()
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log("Error: ", err));

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Database & tables synced");
  })
  .catch((err) => {
    console.error("Error syncing database:", err);
  });

const PORT = process.env.PORT || 9000;

const server = app.listen(PORT, () => {
  console.log(`Server started on ${PORT}....`);
});

process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION! shutting down..");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});

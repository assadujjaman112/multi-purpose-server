const express = require("express");
const cors = require("cors");

const usersRouter = require("./routes/users");
const foodsRouter = require("./routes/foods");
const bookingsRouter = require("./routes/bookings");
const cartsRouter = require("./routes/carts");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from Multi Purpose Restaurant server :)");
});

app.use("/users", usersRouter);
app.use("/foods", foodsRouter);
app.use("/bookings", bookingsRouter);
app.use("/carts", cartsRouter);

module.exports = app;

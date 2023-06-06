const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const menuRouter = require("./routes/api");
const ordersRouter = require("./routes/order");
const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use("/products", menuRouter);
app.use("/orders", ordersRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const message = err.message;
  const code = err.code || 500;
  res.status(code).send({ message });
});

module.exports = app;

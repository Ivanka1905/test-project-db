const express = require("express");
const { addOrder } = require("../../controllers/orders");
const { controller } = require("../../services");

const router = express.Router();

router.post("/order", controller(addOrder));

module.exports = router;

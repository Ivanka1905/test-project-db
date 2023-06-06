const express = require("express");
const { getAll, getOne, updFavorite } = require("../../controllers/products");
const { controller } = require("../../services");

const router = express.Router();

router.get("/", controller(getAll));
router.get("/:id", controller(getOne));
router.patch("/:id/favorite", controller(updFavorite));

module.exports = router;

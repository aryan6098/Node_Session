const path = require("path");
const express = require("express");
const productsController = require("../controllers/products")
const router = express.Router();
const admminData = require("./admin");
router.get("/",productsController.getProducts);

module.exports = router;
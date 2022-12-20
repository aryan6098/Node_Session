const path = require("path");
const express = require("express");
const productsController = require("../controllers/products");

const router = express.Router();

const rootDir = require("../utils/path");
router.get("/admin/add-product", productsController.getAddProduct);
router.post("/admin/add-product", productsController.postAddProduct);


module.exports = router;

const path = require("path");
const express = require("express");

const router = express.Router();
const admminData = require("./admin");
router.get("/", (req, res, next) => {
  console.log(admminData.products);
  const products = admminData.products;
  // res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
  res.render('shop',{
    prods:products,
    pageTitle: "Shop",
    path: '/',
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true
  })
});

module.exports = router;
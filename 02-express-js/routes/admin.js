const express = require("express");

const path = require("path");

// const rootDir = require("../util/path");
const productsController = require("../controllers/products");

const router = express.Router();

// const products = [];

router.get("/add-product", productsController.getAddProduct);

// (req, res, next) => {
//   ///if the path is started with '/' it will show this page, it does not have to be exactly '/' if it start with '/' it will show this page
//   console.log("Add product page");
//   //   res.send(
//   //     "<form action='/admin/add-product' method='POST'><input type='text' name='title'><button type='submit'>Add</button></form>"
//   //   ); //response.send
//   // res.sendFile(path.join(rootDir, "views", "add-product.html"));
//   res.render("add-product", {
//     pageTitle: "Add Product",
//     path: "/admin/add-product",
//     formsCSS: true,
//     productCSS: true,
//     activeAddProduct: true,
//   });
// };

router.post("/add-product", productsController.postAddProduct);

// (req, res, next) => {
//   //this will be called for all the request, but we want to call it only when there is post request, so instead of use we can use app.post() it has the same syntax as .use()
//   //   console.log(req.body); //we get undefined in the console, because by default request does not try to parse the incoming request body
//   products.push({ title: req.body.title });
//   res.redirect("/");
// };

module.exports = router;

// exports.routes = router;
// exports.products = products;

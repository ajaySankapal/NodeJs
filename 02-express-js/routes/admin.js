const express = require("express");
const path = require("path");
const rootDir = require("../util/path");
const router = express.Router();

router.get("/add-product", (req, res, next) => {
  ///if the path is started with '/' it will show this page, it does not have to be exactly '/' if it start with '/' it will show this page
  console.log("Add product page");
  //   res.send(
  //     "<form action='/admin/add-product' method='POST'><input type='text' name='title'><button type='submit'>Add</button></form>"
  //   ); //response.send
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

router.post("/add-product", (req, res, next) => {
  //this will be called for all the request, but we want to call it only when there is post request, so instead of use we can use app.post() it has the same syntax as .use()
  console.log(req.body); //we get undefined in the console, because by default request does not try to parse the incoming request body
  res.redirect("/");
});

module.exports = router;

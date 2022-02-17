const express = require("express");
const authRoute = require("./auth.route");
const usersRoute = require("./users.route");
const brandsRoute = require("./brand.route");
const productsRoute = require("./products.route");
const siteRoute = require("./site.route");
const transactionRoute = require("./transaction.route")
const categoryRoute = require("./category.route")
const secondHandProductRoute = require("./secondHandProduct.route")
const conversationRoute = require("./conversation.route")
const messageRoute = require("./message.route")
const router = express.Router();

const routesIndex = [
  {
    path: "/auth",
    route: authRoute,
  },
  {
    path: "/users",
    route: usersRoute,
  },
  {
    path: "/brands",
    route: brandsRoute,
  },
  {
    path: "/products",
    route: productsRoute,
  },
  {
    path: "/site",
    route: siteRoute,
  },
  {
    path: "/transaction",
    route: transactionRoute
  },
  {
    path: "/categories",
    route: categoryRoute
  },
  {
    path: "/secondHandProducts",
    route: secondHandProductRoute
  },
  {
    path: "/conversations",
    route: conversationRoute
  },
  {
    path: "/messages",
    route: messageRoute
  }
];

routesIndex.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;

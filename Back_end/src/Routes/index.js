const productsRoutes = require("./route_products");
const { Router } = require ('express');

const routes = Router();

routes.use("/products", productsRoutes)

module.exports = routes;
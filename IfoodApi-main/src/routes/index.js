const { Router } = require("express");

const usersRouter = require("./users.routes");
const dishesRouter = require("./dishes.routes");
const ingredientsRouter = require("./ingredients.routes");
const favoritesRouter = require("./favorites.routes");
const ordersRouter = require("./orders.routes");
const sessionsRouter = require("./sessions.routes");

const routes = Router();

routes.use("/users", usersRouter);
routes.use("/sessions", sessionsRouter);
routes.use("/dishes", dishesRouter);
routes.use("/ingredients", ingredientsRouter);
routes.use("/favorites", favoritesRouter);
routes.use("/orders", ordersRouter);


module.exports = routes;

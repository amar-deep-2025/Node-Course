const express = require("express");
const { registeredHomes } = require("./hostRouters");

const userRouter = express.Router();

userRouter.get("/", (req, res) => {
  res.render("home", { registeredHomes });
});

module.exports = userRouter;

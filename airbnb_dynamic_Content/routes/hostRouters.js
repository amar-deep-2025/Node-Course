const express = require("express");
const path = require("path");

const hostRouter = express.Router();
const registeredHomes = [];

hostRouter.get("/host/add-home", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/addHome.html"));
});

hostRouter.post("/host/add-home", (req, res) => {
  registeredHomes.push({ houseName: req.body.houseName });
  res.redirect("/");
});

exports.hostRouter = hostRouter;
exports.registeredHomes = registeredHomes;

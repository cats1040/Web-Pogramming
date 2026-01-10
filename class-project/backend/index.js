// var express = require("express");
import express from "express";
import bodyParser from "body-parser";
import productsRoutes from "./routes/products.js";
import userRoutes from "./routes/users.js";

import "./config/dbConnection.js";

var app = express();
var port = 5000;

app.use(bodyParser.json()); // to process incoming post requests to json (high level)

// /*splat - matches all paths other than root path
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }

  next();
});

app.use("/products", productsRoutes);
app.use("/users", userRoutes);

app.get("/", (req, res) => {
  res.end("Hello world\n");
});

app.listen(port, () => {
  console.log("Server listening on: http://localhost:%s", port);
});

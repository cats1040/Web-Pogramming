var express = require("express");
var app = express();
var fileSystem = require("fs");

// var data = require("./db.json"); // bad way for db

var port = 5000;

var bodyParser = require("body-parser");
app.use(bodyParser.json()); // to process incoming post requests to json (high level)

app.get("/", (req, res) => {
  res.end("Hello world\n");
});

app.get("/products", (req, res) => {
  fileSystem.readFile("./db.json", "utf8", (err, data) => {
    if (err) {
      console.error("Error reading db.json file:", err);
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }
    const currentData = JSON.parse(data);
    const products = currentData.products;
    console.log(products);
    res.json(products);
  });
});

app.post("/products", (req, res) => {
  const newProduct = req.body;

  if (newProduct && newProduct.name && newProduct.price) {
    console.log("Received new product: ", newProduct);
  } else {
    res.status(400).json({ error: "Invalid product data" });
  }

  fileSystem.readFile("./db.json", "utf8", (err, data) => {
    if (err) {
      console.error("Error reading db.json file:", err);
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }
    const currentData = JSON.parse(data);
    const products = currentData.products;
    const updatedProducts = [...products, newProduct];

    currentData.products = updatedProducts;

    fileSystem.writeFile(
      "./db.json",
      JSON.stringify(currentData),
      (err, data) => {
        if (err) {
          console.error("Error writing to db.json file:", err);
          res.status(500).json({ error: "Internal Server Error" });
          return;
        }

        console.log("db.json file updated successfully");
        res.status(201).json({ message: "Product created successfully" });
        return;
      }
    );
  });
});

app.listen(port, () => {
  console.log("Server listening on: http://localhost:%s", port);
});

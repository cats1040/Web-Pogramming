var express = require("express");
var app = express();
var fileSystem = require("fs");

// var data = require("./db.json"); // bad way for db

var port = 5000;

var bodyParser = require("body-parser");
const { stringify } = require("querystring");
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

    const currentData = JSON.parse(data).products.push(newProduct);

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

app.put("/products/:id", (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;

  fileSystem.readFile("./db.json", "utf8", (err, data) => {
    if (err) {
      console.error("Error reading db.json", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    const currentData = JSON.parse(data);
    const products = currentData.products;

    // find product index
    const index = products.findIndex((p) => p.id == id);

    if (index === -1) {
      return res.status(404).json({ error: "Product not found" });
    }

    // update product
    // data not sanitized
    products[index] = { ...products[index], ...updatedData };

    // save back to file
    fileSystem.writeFile(
      "./db.json",
      JSON.stringify(currentData, null, 2),
      (err) => {
        if (err) {
          console.error("Error writing db.json");
          return res.status(500).json({ error: "Internal Server Error" });
        }

        return res.json({
          message: "Product updated successfully",
          updatedProduct: products[index],
        });
      }
    );
  });
});

// Sample Input: localhost:5000/products?id=3
// app.put("/products", (req, res) => {
//   // Update product by ID
//   let queryParams = req.query;
//   let body = req.body;

//   console.log("Params:", queryParams);
//   console.log("Body:", body);
// });

app.delete("/products/:id", (req, res) => {
  const { id } = req.params;

  fileSystem.readFile("./db.json", "utf8", (err, data) => {
    if (err) {
      console.error("Error reading db.json", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    const currentData = JSON.parse(data);
    const products = currentData.products;

    // find product index
    const index = products.findIndex((p) => p.id == id);

    if (index == -1) {
      return res.status(404).json({ error: "Product not found" });
    }

    // update products
    products.splice(index, 1);

    // save back to file
    fileSystem.writeFile(
      "./db.json",
      JSON.stringify(currentData, null, 2),
      (err) => {
        if (err) {
          console.error("Error writing db.json");
          return res.status(500).json({ error: "Internal Server Error" });
        }

        return res.json({
          message: "Product removed successfully",
          removedProduct: products[index],
        });
      }
    );
  });
});

app.listen(port, () => {
  console.log("Server listening on: http://localhost:%s", port);
});

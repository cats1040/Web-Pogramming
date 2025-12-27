import express, { Router } from "express";
import ProductModel from "../models/products.js";

const router = express.Router();

import fileSystem from "fs";

router.get("/", async (req, res) => {
  const products = await ProductModel.getAllProducts();
  res.json(products);

  // fileSystem.readFile("./db.json", "utf8", (err, data) => {
  //   if (err) {
  //     console.error("Error reading db.json file:", err);
  //     res.status(500).json({ error: "Internal Server Error" });
  //     return;
  //   }
  //   const currentData = JSON.parse(data);
  //   const products = currentData.products;
  //   console.log(products);
  //   res.json(products);
  // });
});

router.post("/", (req, res) => {
  const newProduct = req.body;

  if (newProduct && newProduct.name && newProduct.price) {
    console.log("Received new product: ", newProduct);
  } else {
    res.status(400).json({ error: "Invalid product data" });
  }

  productsRoutes.addNewProduct(newProduct).then((createdProduct) => {
    res
      .status(201)
      .json({ message: "Product created successfully", createdProduct });
  });

  // fileSystem.readFile("./db.json", "utf8", (err, data) => {
  //   if (err) {
  //     console.error("Error reading db.json file:", err);
  //     res.status(500).json({ error: "Internal Server Error" });
  //     return;
  //   }

  //   const currentData = JSON.parse(data);
  //   currentData.products.push(newProduct);

  //   fileSystem.writeFile(
  //     "./db.json",
  //     JSON.stringify(currentData),
  //     (err, data) => {
  //       if (err) {
  //         console.error("Error writing to db.json file:", err);
  //         res.status(500).json({ error: "Internal Server Error" });
  //         return;
  //       }

  //       console.log("db.json file updated successfully");
  //       res.status(201).json({ message: "Product created successfully" });
  //       return;
  //     }
  //   );
  // });
});

router.put("/:id", (req, res) => {
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

router.delete("/:id", (req, res) => {
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

export default router;

import express from "express";
import ProductModel from "../models/products.js";

const router = express.Router();

// GET all products
router.get("/", (req, res) => {
  ProductModel.getAllProducts(
    (data) => {
      console.log("-------- Product data received: ", data);
      res.status(200).json(data);
    },
    (error) => {
      console.error("Error fetching products:", error?.message);
      res.status(500).json({ error: "Failed to fetch products" });
    }
  );
});

// ADD new product
router.post("/", (req, res) => {
  const newProduct = req.body;
  console.log("New product data received: ", newProduct);

  ProductModel.addNewProduct(
    newProduct,
    (createdProduct) => {
      res.status(201).json(createdProduct);
    },
    (error) => {
      console.error("Error adding product:", error?.message);
      res.status(500).json({ error: "Failed to add new product" });
    }
  );
});

export default router;

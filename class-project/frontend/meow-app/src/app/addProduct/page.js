"use client";

import Button from "../components/button";
import { useRef } from "react";

function AddProduct() {
  const nameRef = useRef(null);
  const priceRef = useRef(null);
  const descRef = useRef(null);
  const imageurlRef = useRef(null);
  const categoryRef = useRef(null);
  const stockRef = useRef(null);

  const submitHandler = async (e) => {
    e.preventDefault(); // Prevent page reload

    const newProduct = {
      name: nameRef.current.value,
      price: parseFloat(priceRef.current.value),
      description: descRef.current.value,
      image: imageurlRef.current.value,
      category: categoryRef.current.value,
      stock: parseInt(stockRef.current.value),
    };

    try {
      const response = await fetch("http://localhost:5000/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProduct),
      });

      if (response.ok) {
        window.alert("Product added successfully!");
        nameRef.current.value = "";
        priceRef.current.value = "";
        descRef.current.value = "";
        imageurlRef.current.value = "";
        categoryRef.current.value = "";
        stockRef.current.value = "";
      } else {
        const errText = await response.text();
        console.error("Error adding product:", errText);
        window.alert("Failed to add product. Please try again.");
      }
    } catch (error) {
      console.error("Error adding product:", error);
      window.alert("Failed to add product. Please try again.");
    }
  };

  return (
    <div
      style={{
        height: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1
        style={{ fontWeight: "900", fontSize: "1.5rem", marginBottom: "2em" }}
      >
        Add New Product
      </h1>

      <form
        className="max-w-md mx-auto"
        style={{ width: "400px" }}
        onSubmit={submitHandler}
      >
        {/* Product Name */}
        <div className="relative z-0 w-full mb-5 group">
          <input
            ref={nameRef}
            type="text"
            id="name"
            className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="name"
            className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Product Name
          </label>
        </div>

        {/* Price */}
        <div className="relative z-0 w-full mb-5 group">
          <input
            ref={priceRef}
            type="number"
            id="price"
            className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="price"
            className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Price
          </label>
        </div>

        {/* Description */}
        <div className="relative z-0 w-full mb-5 group">
          <textarea
            ref={descRef}
            id="desc"
            className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="desc"
            className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Description
          </label>
        </div>

        {/* Image URL */}
        <div className="relative z-0 w-full mb-5 group">
          <input
            ref={imageurlRef}
            type="text"
            id="imageurl"
            className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="imageurl"
            className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Image URL
          </label>
        </div>

        {/* Category */}
        <div className="relative z-0 w-full mb-5 group">
          <input
            ref={categoryRef}
            type="text"
            id="category"
            className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="category"
            className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Category
          </label>
        </div>

        {/* Stock */}
        <div className="relative z-0 w-full mb-5 group">
          <input
            ref={stockRef}
            type="number"
            id="stock"
            className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="stock"
            className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Stock
          </label>
        </div>

        <Button type="submit" variant="yellow">
          Add Product
        </Button>
      </form>
    </div>
  );
}

export default AddProduct;

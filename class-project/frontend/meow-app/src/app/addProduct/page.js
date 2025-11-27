"use client";

import Button from "../components/button";
import { useRef } from "react";

function AddProduct() {
  const nameRef = useRef(null);
  const priceRef = useRef(null);
  const descRef = useRef(null);
  const imageurlRef = useRef(null);

  const submitHandler = (e) => {
    console.log("Form Submitted");

    // e.preventDefault();

    // very expensive queries
    // solution - useRef
    // const name = document.getElementById("name").value;
    // const price = document.getElementById("price").value;
    // const desc = document.getElementById("desc").value;
    // const imageurl = document.getElementById("imageurl").value;

    const name = nameRef.current.value;
    const price = priceRef.current.value;
    const desc = descRef.current.value;
    const imageurl = imageurlRef.current.value;

    console.log({ name, price, desc, imageurl });

    const newProduct = {
      id: Math.random().toString(),
      name: name,
      price: parseFloat(price),
      description: desc,
      image: imageurl,
    };

    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((response) => {
        console.log("Response received from server for new product ", response);
        window.alert("Product added successfully!");
      })
      .catch((error) => {
        console.error("Error occurred while adding new product ", error);
        window.alert("Failed to add product. Please try again.");
      });
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
        style={{
          width: "400px",
        }}
      >
        <div className="relative z-0 w-full mb-5 group">
          <input
            ref={nameRef}
            type="text"
            name="name"
            id="name"
            className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
            placeholder=""
            required
          />
          <label
            htmlFor="name"
            className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
          >
            Product Name
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            ref={priceRef}
            type="number"
            name="price"
            id="price"
            className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="price"
            className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
          >
            Price
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            ref={descRef}
            type="description"
            name="desc"
            id="desc"
            className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="desc"
            className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
          >
            Description
          </label>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
              ref={imageurlRef}
              type="text"
              name="imageurl"
              id="imageurl"
              className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="imageurl"
              className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              Image URL
            </label>
          </div>
        </div>
        <Button type="submit" variant="yellow" onClick={submitHandler}>
          Add Product
        </Button>
      </form>
    </div>
  );
}

export default AddProduct;

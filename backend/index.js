var express = require("express");
var app = express();

var port = 5000;

app.get("/", (req, res) => {
  res.end("Hello world\n");
});

app.get("/products", (req, res) => {
  //   res.end(
  //     JSON.stringify([
  //       {
  //         id: "p1",
  //         name: "Product 1",
  //         price: 10,
  //         description: "This is product 1",
  //         image: "https://placehold.co/300x200",
  //       },
  //     ])
  //   );

  // or using res.json method
  res.json([
    {
      id: "p1",
      name: "Product 1",
      price: 10,
      description: "This is product 1",
      image: "https://placehold.co/300x200",
    },
    {
      id: "p2",
      name: "Product 2",
      price: 20,
      image: "https://placehold.co/300x200",
      description: "This is product 2",
    },
    {
      id: "p3",
      name: "Product 3",
      price: 30,
      image: "https://placehold.co/300x200",
      description: "This is product 3",
    },
    {
      id: "p4",
      name: "Product 4",
      price: 40,
      image: "https://placehold.co/300x200",
      description: "This is product 4",
    },
    {
      id: "p5",
      name: "Product 5",
      price: 50,
      image: "https://placehold.co/300x200",
      description: "This is product 5",
    },
  ]);
});

app.post("/products", (req, res) => {
  res.status(201).json({ message: "Product created successfully" });
});

app.listen(port, () => {
  console.log("Server listening on: http://localhost:%s", port);
});

import Link from "next/link";
import ProductsList from "./components/productsList";

export const revalidate = 10;

export default async function Home() {
  // --- simulate api call behavior with a delay ---

  function sleep(ms) {
    // Nodejs also has setTimeout in global scope
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  await sleep(1000); // simulate loading

  console.log("Home Page Rendered");

  const products = [
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
  ];

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Meow App 🐱</h1>
      <ProductsList products={products} />
    </>
  );
}

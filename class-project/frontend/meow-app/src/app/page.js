import Link from "next/link";
import ProductsList from "./components/productsList";
import Button from "./components/button";
import { sleep } from "./common/utils/helpers";

// Cache revalidation / Disable caching
export const revalidate = 60;

export default async function Home() {
  // --- simulate api call behavior with a delay ---

  await sleep(1000); // simulate loading

  console.log("Home Page Rendered");
  // -----------------------------------------------

  const productsFromJServer = await fetch("http://localhost:5000/products", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "",
    },
  });
  const products = await productsFromJServer.json();
  console.log("------------Fetched products from server ", products);

  // const products = [
  // {
  //   id: "p1",
  //   name: "Product 1",
  //   price: 10,
  //   description: "This is product 1",
  //   image: "https://placehold.co/300x200",
  // },
  // {
  //   id: "p2",
  //   name: "Product 2",
  //   price: 20,
  //   image: "https://placehold.co/300x200",
  //   description: "This is product 2",
  // },
  // {
  //   id: "p3",
  //   name: "Product 3",
  //   price: 30,
  //   image: "https://placehold.co/300x200",
  //   description: "This is product 3",
  // },
  // {
  //   id: "p4",
  //   name: "Product 4",
  //   price: 40,
  //   image: "https://placehold.co/300x200",
  //   description: "This is product 4",
  // },
  // {
  //   id: "p5",
  //   name: "Product 5",
  //   price: 50,
  //   image: "https://placehold.co/300x200",
  //   description: "This is product 5",
  // },
  // ];

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Meow App 🐱</h1>
      <ProductsList products={products} />
      <section className="border-2 border-solid py-8">
        <div className="max-w-6xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-4">
            Discover the Best Deals Online
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Shop thousands of products from top brands at unbeatable prices.
          </p>
        </div>
        <Button variant="primary">Button</Button>
      </section>
    </>
  );
}

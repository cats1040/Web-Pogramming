import ProductCard from "./productCard";

function ProductsList({ products }) {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1em",
          padding: "1em",
        }}
      >
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </>
  );
}

export default ProductsList;

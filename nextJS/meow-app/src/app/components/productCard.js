function ProductCard({ product }) {
  return (
    <div
      style={{ border: "1px solid black", padding: "0.5em", margin: "0.2em" }}
    >
      <img src={product.image} alt={product.name} width="200" />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>${product.price}</p>
    </div>
  );
}

export default ProductCard;

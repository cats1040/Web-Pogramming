function ProductsDetailPage({ params }) {
  console.log(params);
  return <>PDP Page for {params.dynamicProductName}</>;
}

export default ProductsDetailPage;

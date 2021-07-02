import React from "react";
import ProductCell from "./ProductCell";

const productList = [
  {
    name: "Pale Ale",
    brand: "Pyramid",
    price: "$4.99",
    alcoholContent: "2.5",
    remaining: 124,
  },
  {
    name: "Hefeweizen",
    brand: "Sierra Nevada",
    price: "$5.99",
    alcoholContent: "3.0",
    remaining: 124,
  },
];
function ProductList() {
  return (
    <React.Fragment>
      {productList.map((product, index) => (
        <ProductCell
          name={product.name}
          brand={product.brand}
          price={product.price}
          alcoholContent={product.alcoholContent}
          key={index}
        />
      ))}
    </React.Fragment>
  );
}

export default ProductList;

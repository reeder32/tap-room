import React from "react";
import ProductCell from "./ProductCell";
import PropTypes from "prop-types";

function ProductList(props) {
  return (
    <React.Fragment>
      {props.productList.map((product) => (
        <ProductCell
          whenCellClicked={props.onCellSelection}
          name={product.name}
          brand={product.brand}
          price={product.price}
          alcoholContent={product.alcoholContent}
          id={product.id}
          key={product.id}
        />
      ))}
    </React.Fragment>
  );
}

ProductList.propTypes = {
  productList: PropTypes.array,
  onCellSelection: PropTypes.func,
};

export default ProductList;

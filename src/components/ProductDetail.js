import React from "react";
import PropTypes from "prop-types";
function ProductDetail(props) {
  const { product } = props;
  return (
    <React.Fragment>
      <h1>{product.name}</h1>
      <h3>{product.brand}</h3>
      <h3>{product.alcoholContent}</h3>
      <h3>{product.price}</h3>
      <h3>{product.remaining}</h3>
    </React.Fragment>
  );
}

ProductDetail.propTypes = {
  product: PropTypes.object,
};

export default ProductDetail;

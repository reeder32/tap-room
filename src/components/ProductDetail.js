import React from "react";
import PropTypes from "prop-types";
function ProductDetail(props) {
  const { product } = props;
  return (
    <React.Fragment>
      <h1>{product.name}</h1>
      <h3>
        Brand: <small>{product.brand}</small>
      </h3>
      <h3>
        Alcohol Content: <small>{product.alcoholContent}% abv</small>
      </h3>
      <h3>
        Price: <small>${product.price}</small>
      </h3>
      <h3>
        {product.remaining} <small>remaining pints</small>
      </h3>
    </React.Fragment>
  );
}

ProductDetail.propTypes = {
  product: PropTypes.object,
};

export default ProductDetail;

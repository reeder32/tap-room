import React from "react";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";

function DeleteButton(props) {
  const { product } = props;
  function handleDeletePint() {
    props.onDeletePint({
      name: product.name,
      brand: product.brand,
      price: product.price,
      alcoholContent: product.alcoholContent,
      remaining: product.remaining - 16,
      id: product.id,
    });
  }
  const isOutOfStock = product.remaining <= 5;
  return (
    <Button
      onClick={handleDeletePint}
      variant="outline-danger"
      disabled={isOutOfStock}
    >
      sell pint
    </Button>
  );
}

DeleteButton.propTypes = {
  product: PropTypes.object,
  onDeletePint: PropTypes.func,
};
export default DeleteButton;

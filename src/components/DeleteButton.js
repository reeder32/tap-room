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
      remaining: product.remaining - 1,
      id: product.id,
    });
  }
  let buttonText = null;
  const isOutOfStock = product.remaining <= 0;

  isOutOfStock ? (buttonText = "Sold out!") : (buttonText = "Sell pint");
  return (
    <Button
      onClick={handleDeletePint}
      variant="outline-danger"
      disabled={isOutOfStock}
    >
      {buttonText}
    </Button>
  );
}

DeleteButton.propTypes = {
  product: PropTypes.object,
  onDeletePint: PropTypes.func,
};
export default DeleteButton;

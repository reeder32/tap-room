import React from "react";
import ReusableForm from "./ResusableForm";
import { v4 } from "uuid";
import PropTypes from "prop-types";

function ProductForm(props) {
  function handleNewProductFormSubmission(event) {
    event.preventDefault();
    props.onNewProductCreation({
      name: event.target.name.value,
      brand: event.target.brand.value,
      price: event.target.price.value,
      alcoholContent: event.target.alcoholContent.value,
      remaining: Number(event.target.remaining.value),
      id: v4(),
    });
  }
  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewProductFormSubmission}
        buttonText="Add"
      />
    </React.Fragment>
  );
}

ProductForm.propTypes = {
  onNewProductCreation: PropTypes.func,
};

export default ProductForm;

import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";

function ProductCell(props) {
  return (
    <React.Fragment>
      <div className="product-details">
        <h4>
          <em>{props.name}</em>
        </h4>
        <h5>{props.brand}</h5>
        <h5>{props.alcoholContent}</h5>
        <h5>{props.price}</h5>
      </div>
      <div className="remaining">
        <h3>{props.remaining}</h3>
      </div>
      <Button
        onClick={() => props.whenCellClicked(props.id)}
        variant="outline-info"
      >
        info
      </Button>
    </React.Fragment>
  );
}

ProductCell.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  alcoholContent: PropTypes.string.isRequired,
  remaining: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  whenCellClicked: PropTypes.func,
};

export default ProductCell;

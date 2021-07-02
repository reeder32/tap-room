import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";

function ProductCell(props) {
  return (
    <React.Fragment>
      <div className="product-details">
        <h1>{props.name}</h1>
        <h5>
          Brand: <small>{props.brand}</small>
        </h5>
        <h5>
          Alcohol Content: <small>{props.alcoholContent}% abv</small>
        </h5>
        <h5>
          Price: <small>${props.price}</small>
        </h5>
      </div>
      <div className="remaining">
        <h5>
          {props.remaining}
          <small> remaining pints</small>
        </h5>
      </div>
      <Button
        onClick={() => props.whenCellClicked(props.id)}
        variant="outline-info"
      >
        info
      </Button>{" "}
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

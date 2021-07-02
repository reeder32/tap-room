import React from "react";
import PropTypes from "prop-types";

function ProductCell(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenCellClicked(props.id)}>
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
      </div>
    </React.Fragment>
  );
}

ProductCell.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.string,
  alcoholContent: PropTypes.string,
  remaining: PropTypes.number,
  id: PropTypes.string,
  whenCellClicked: PropTypes.func,
};

export default ProductCell;

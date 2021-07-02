import React from "react";
import ProductCell from "./ProductCell";
import PropTypes from "prop-types";
import DeleteButton from "./DeleteButton";
function ProductList(props) {
  function handleDeletePint(productToEdit) {
    props.onDeletePint({
      whenCellClicked: productToEdit.onCellSelection,
      name: productToEdit.name,
      brand: productToEdit.brand,
      price: productToEdit.price,
      alcoholContent: productToEdit.alcoholContent,
      remaining: productToEdit.remaining - 8,
      id: productToEdit.id,
      key: productToEdit.id,
    });
  }
  return (
    <React.Fragment>
      <div className="cellInfo">
        {props.productList.map((product) => (
          <ProductCell
            whenCellClicked={props.onCellSelection}
            name={product.name}
            brand={product.brand}
            price={product.price}
            alcoholContent={product.alcoholContent}
            remaining={product.remaining}
            id={product.id}
            key={product.id}
          />
        ))}
        {props.productList.map((product) => (
          <DeleteButton
            product={product}
            onDeletePint={() => handleDeletePint(product)}
          ></DeleteButton>
        ))}
      </div>
    </React.Fragment>
  );
}

ProductList.propTypes = {
  productList: PropTypes.array,
  onCellSelection: PropTypes.func,
  onDeletePint: PropTypes.func,
};

export default ProductList;

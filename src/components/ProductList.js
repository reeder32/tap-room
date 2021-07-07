import React from "react";
import ProductCell from "./ProductCell";
import PropTypes from "prop-types";
import DeleteButton from "./DeleteButton";
import ListGroup from "react-bootstrap/ListGroup";

function ProductList(props) {
  function handleDeletePint(productToEdit) {
    props.onDeletePint({
      whenCellClicked: productToEdit.onCellSelection,
      name: productToEdit.name,
      brand: productToEdit.brand,
      price: productToEdit.price,
      alcoholContent: productToEdit.alcoholContent,
      remaining: productToEdit.remaining - 1,
      id: productToEdit.id,
      key: productToEdit.id,
    });
  }
  return (
    <React.Fragment>
      <ListGroup>
        {props.productList.map((product, index) => (
          <ListGroup.Item key={`${product.id}`}>
            <ProductCell
              whenCellClicked={props.onCellSelection}
              name={product.name}
              brand={product.brand}
              price={product.price}
              alcoholContent={product.alcoholContent}
              remaining={product.remaining}
              id={product.id}
            />
            <DeleteButton
              product={product}
              onDeletePint={() => handleDeletePint(product)}
            ></DeleteButton>{" "}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </React.Fragment>
  );
}

ProductList.propTypes = {
  productList: PropTypes.array,
  onCellSelection: PropTypes.func,
  onDeletePint: PropTypes.func,
};

export default ProductList;

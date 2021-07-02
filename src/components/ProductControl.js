import React from "react";
import ProductForm from "./ProductForm";
import ProductList from "./ProductList";
import ProductDetail from "./ProductDetail";

class ProductControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
    };
  }
  handlePageChange = () => {
    if (this.formVisibleOnPage) {
      this.setState({
        formVisibleOnPage: false,
      });
    } else {
      this.setState((prevState) => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  };
  render() {
    let visibleState = null;
    let buttonText = null;
    if (!this.state.formVisibleOnPage) {
      visibleState = <ProductList />;
      buttonText = "Add new";
    } else {
      visibleState = <ProductForm />;
      buttonText = "Back to products";
    }

    return (
      <React.Fragment>
        <button onClick={this.handlePageChange}>{buttonText}</button>
        {visibleState}
      </React.Fragment>
    );
  }
}

export default ProductControl;

import React from "react";
import ProductForm from "./ProductForm";
import ProductList from "./ProductList";
import ProductDetail from "./ProductDetail";
import Button from "react-bootstrap/Button";

class ProductControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterProductList: [],
      selectedProduct: null,
    };
  }
  handlePageChange = () => {
    if (this.state.selectedProduct) {
      this.setState({
        formVisibleOnPage: false,
        selectedProduct: null,
      });
    } else {
      this.setState((prevState) => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  };
  handleProductSelect = (id) => {
    const selectedProduct = this.state.masterProductList.filter(
      (product) => product.id === id
    )[0];
    this.setState({ selectedProduct: selectedProduct });
  };
  handleAddingNewProductToList = (newProduct) => {
    const newMasterProductList =
      this.state.masterProductList.concat(newProduct);
    this.setState({
      masterProductList: newMasterProductList,
      formVisibleOnPage: false,
    });
  };

  handleDeletePint = (editedProduct) => {
    const index = this.state.masterProductList.findIndex(
      (product) => product.id === editedProduct.id
    );
    const editedMasterProductList = this.state.masterProductList.filter(
      (product) => product.id !== editedProduct.id
    );
    editedMasterProductList.splice(index, 0, editedProduct);
    this.setState({
      masterProductList: editedMasterProductList,
      selectedProduct: null,
    });
  };

  render() {
    let visibleState = null;
    let buttonText = null;
    if (this.state.selectedProduct) {
      visibleState = <ProductDetail product={this.state.selectedProduct} />;
      buttonText = "Back to products";
    } else if (!this.state.formVisibleOnPage) {
      visibleState = (
        <ProductList
          productList={this.state.masterProductList}
          onCellSelection={this.handleProductSelect}
          onDeletePint={this.handleDeletePint}
        />
      );
      buttonText = "Add new";
    } else {
      visibleState = (
        <ProductForm onNewProductCreation={this.handleAddingNewProductToList} />
      );
      buttonText = "Back to products";
    }

    return (
      <React.Fragment>
        <div>
          <Button
            onClick={this.handlePageChange}
            variant="dark"
            size="lg"
            block
          >
            {buttonText}
          </Button>
        </div>
        <div className="mainBody">{visibleState}</div>
      </React.Fragment>
    );
  }
}

export default ProductControl;

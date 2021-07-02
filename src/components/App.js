import React from "react";
import Header from "./Header";
import ProductList from "./ProductList";
import ProductForm from "./ProductForm";
function App() {
  return (
    <React.Fragment>
      <Header />
      <ProductList />
      <ProductForm />
    </React.Fragment>
  );
}

export default App;

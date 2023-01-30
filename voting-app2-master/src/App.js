import { useState } from "react";
import FormUnController from "./components/FormUnController";
import ProductsList from "./components/ProductsList";
import { products, submitters, images } from "./services/seeds";

const App = () => {
  const [productList, setProductList] = useState(products);
  const handleAddProduct = (product) => {
    setProductList([...productList, product]);
  };
  return (
    <div className="ui">
      <h1>Voting App</h1>
      <hr />
   {/*    <FormController
        products={productList}
        submitters={submitters}
        images={images}
        handleAddProduct={handleAddProduct}
      /> */}
      <FormUnController
        products={productList}
        submitters={submitters}
        images={images}
        handleAddProduct={handleAddProduct}
      />
      <ProductsList productList={productList} setProductList={setProductList} />
    </div>
  );
};

export default App;

import React, { useState, useEffect } from "react";

// SERVICES
import productService from './services/productService';

function App() {
  const [products, setproducts] = useState(null);

  useEffect(() => {
    if (!products) {
      getProducts();
    }
  })

  const getProducts = async () => {
    let res = await productService.getAll();
    console.log(res);
    setproducts(res);
  }

  const renderProduct = product => {
    return (
      <li key={product._id} className="list__item product">
        <div>
          <img src={"https://cf.shopee.vn/file/" + product.image} width="100"></img>
          <strong className="product__description">{product.price.toString().substring(0, 4)} VND</strong>
        </div>
        <h3 className="product__name"><a target="_blank" href={"https://shopee.vn/" + product.name + "-i." + product.shopid + "." + product.itemid}>{product.name}</a></h3>
      </li>
    );
  };

  return (
    <div className="App">
      <ul className="list">
        {(products && products.length > 0) ? (
          products.map(product => renderProduct(product))
        ) : (
          <p>Chua hien thi san pham, vui long cho .....</p>
        )}
      </ul>
    </div>
  );
}

export default App;

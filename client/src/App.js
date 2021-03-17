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
      <div style={{ width: '20%', float: 'left' }} key={product._id} className="list__item product">
        <a style={{ ['text-decoration']: 'none', ['font-weight']: 'bold', ['text-align']: 'center', color: 'black' }} target="_blank" href={"https://shopee.vn/" + product.name + "-i." + product.shopid + "." + product.itemid}>
          <div style={{ padding: '10px' }}>
            <img src={"https://cf.shopee.vn/file/" + product.image} width="100%"></img>
            {/* <img src="https://kb.rspca.org.au/wp-content/uploads/2018/11/golder-retriever-puppy.jpeg" width="100%"></img> */}
            <strong style={{ ['font-size']: '9px' }} className="product__price">{product.price.toString().substring(0, 4)} VND</strong>
          </div>
          <div style={{
            ['font-size']: '10px', padding: '5px', ['white-space']: 'nowrap',
            width: '90%',
            overflow: 'hidden',
            ['text-overflow']: 'ellipsis',
            padding: '5px'
          }} className="product__name">{product.name}</div>
        </a>
      </div >
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

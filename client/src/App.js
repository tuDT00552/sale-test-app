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

  const getVnd = (money) => {
    money = money.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
    return money;
  }

  const getProducts = async () => {
    let res = await productService.getAll();
    setproducts(res);
  }

  const renderProduct = product => {
    return (
      <div>
        <div style={{ width: '50%', float: 'left' }} className="list__item product">
          <a style={{ ['textDecoration']: 'none', ['fontWeight']: 'bold', ['textAlign']: 'center', color: 'black' }} target="_blank" href={"https://shopee.vn/" + product.name + "-i." + product.shopid + "." + product.itemid}>
            <div style={{ padding: '10px' }}>
              <img src={"https://cf.shopee.vn/file/" + product.image} width="100%"></img>
              {/* <img src="https://kb.rspca.org.au/wp-content/uploads/2018/11/golder-retriever-puppy.jpeg" width="100%"></img> */}
              <strong style={{ ['fontSize']: '9px' }} className="product__price">{getVnd(parseInt(product.price.toString().substring(0, product.price.toString().length - 5)))}</strong>
            </div>
            <div style={{
              ['fontSize']: '10px', padding: '5px', ['whiteSpace']: 'nowrap',
              width: '90%',
              overflow: 'hidden',
              ['textOverflow']: 'ellipsis',
              padding: '5px'
            }} className="product__name">{product.name}</div>
          </a>
        </div >
      </div>
    );
  };

  return (
    <div className="App">
      <div className="list" style={{ margin: '0 15px' }}>
        <h1>Xốp Be 1 Ngìn™</h1><span>Version 1 dang update ...</span>
        <hr></hr>
        {(products && products.length > 0) ? (
          products.map(product => renderProduct(product))
        ) : (
          <p>Chua hien thi san pham, cho ti nke .....</p>
        )}
      </div>
    </div>
  );
}

export default App;

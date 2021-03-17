import React from 'react';

export default function ProductList() {
    var ShopID = "705977";
    var xhr = new XMLHttpRequest()
    const [products, setProducts] = React.useState([]);
    React.useEffect(() => {
        xhr.addEventListener('load', () => {
            setProducts(JSON.parse(xhr.response))
        })
        xhr.open("GET", "http://localhost:5000/api/sale/" + ShopID + "/" + 0 + "")
        xhr.send()
    }, []);


    return products.map(product => (
        <ProductItem key={product.itemid} product={product} />
    ))

}

function ProductItem({ product }) {
    return (
        <section>
            <div>
                <strong><a target="_blank" href={"https://shopee.vn/" + product.name + "-i." + product.shopid + "." + product.itemid}>{product.name}</a></strong>
                <br></br>
                <strong>{product.price_min} VND</strong>
            </div>
        </section>
    )
}
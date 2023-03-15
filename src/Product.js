import React from "react";

const Product = ({ product, addToCart }) => {
  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <button onClick={handleAddToCart}>Add to cart</button>
    </div>
  );
};

const Products = ({ products, addToCart }) => {
  const productList = products.map((product) => (
    <Product key={product.id} product={product} addToCart={addToCart} />
  ));

  return (
    <div>
      <h2>Products</h2>
      {productList}
    </div>
  );
};

export default Products;

import React from 'react';
import Product from './Product';

const Products = ({ products, onAddToCart }) => {
  return (
    <div className="products">
      <h2>Products</h2>
      <div className="product-list">
        {products.map((product) => (
          <Product key={product.id} product={product} onAddToCart={onAddToCart} />
        ))}
      </div>
    </div>
  );
};

export default Products;

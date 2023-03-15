import React from 'react';
import Product from '../Product';

const products = [
  {
    id: 1,
    name: 'Product 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://via.placeholder.com/150',
    price: 9.99
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'Pellentesque euismod velit nec velit efficitur, ut bibendum eros blandit.',
    image: 'https://via.placeholder.com/150',
    price: 19.99
  },
  {
    id: 3,
    name: 'Product 3',
    description: 'Fusce at velit et quam posuere hendrerit sed nec purus.',
    image: 'https://via.placeholder.com/150',
    price: 29.99
  }
];

function Home() {
  return (
    <div>
      <h2>Products</h2>
      <div className="product-list">
        {products.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Home;
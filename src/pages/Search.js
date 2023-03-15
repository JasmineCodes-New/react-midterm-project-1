import React, { useState } from 'react';

const Search = ({ products, setFilteredProducts }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);

    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(newSearchTerm.toLowerCase())
    );

    setFilteredProducts(filteredProducts);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;

import React from 'react';

const CartItem = ({ item, updateQuantity, removeFromCart }) => {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <div className="cart-item-details">
        <h3>{item.name}</h3>
        <p>{item.price}</p>
        <div className="cart-item-quantity">
          <label htmlFor={`quantity-${item.id}`}>Quantity:</label>
          <input
            type="number"
            id={`quantity-${item.id}`}
            name={`quantity-${item.id}`}
            min="1"
            max="10"
            value={item.quantity}
            onChange={(e) => updateQuantity(item.id, e.target.value)}
          />
        </div>
        <button className="remove-button" onClick={() => removeFromCart(item.id)}>
          Remove from Cart
        </button>
      </div>
    </div>
  );
};

export default CartItem;

import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import CartItem from '../CartItem';

function Cart() {
  const [cartItems, setCartItems] = useContext(CartContext);

  const removeItem = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
  }

  const totalPrice = cartItems.reduce((acc, item) => {
    return acc + (item.price * item.quantity);
  }, 0);

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cartItems.map(item => (
            <CartItem key={item.id} item={item} removeItem={removeItem} />
          ))}
          <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
        </div>
      )}
    </div>
  );
}

export default Cart;
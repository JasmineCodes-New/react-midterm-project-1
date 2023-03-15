import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Checkout = ({ cartItems, clearCart }) => {
  const [shippingInfo, setShippingInfo] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    clearCart();
    history.push("/thankyou"); // Redirect to "Thank you" page
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo((prevShippingInfo) => ({
      ...prevShippingInfo,
      [name]: value,
    }));
  };

  const totalPrice = cartItems.reduce(
    (accumulator, currentItem) => accumulator + currentItem.price,
    0
  );

  const cartItemsList = cartItems.map((item) => (
    <div key={item.id}>
      <p>{item.name}</p>
      <img src={item.image} alt={item.name} />
      <p>{item.price}</p>
      <p>Quantity: {item.quantity}</p>
    </div>
  ));

  return (
    <div>
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={shippingInfo.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={shippingInfo.address}
            onChange={handleChange}
          />
        </label>
        <label>
          City:
          <input
            type="text"
            name="city"
            value={shippingInfo.city}
            onChange={handleChange}
          />
        </label>
        <label>
          State:
          <input
            type="text"
            name="state"
            value={shippingInfo.state}
            onChange={handleChange}
          />
        </label>
        <label>
          Zip:
          <input
            type="text"
            name="zip"
            value={shippingInfo.zip}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Place Order</button>
      </form>
      <div>
        <h3>Cart Items</h3>
        {cartItemsList}
        <h3>Total Price: {totalPrice}</h3>
      </div>
    </div>
  );
};

export default Checkout;
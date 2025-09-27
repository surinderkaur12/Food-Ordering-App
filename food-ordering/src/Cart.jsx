import React, { useEffect, useState } from "react";
import { useCart } from "./CartContext";
import "./Cart.css";

export default function Cart() {
  const { cart, dispatch } = useCart();
  const total = cart.reduce((acc, item) => acc + item.quantity * item.price, 0);

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    alert("✅ Order placed successfully!");
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <div className="cartbody">
      <div className="cart-container">
        <h2>Your Cart</h2>

        {cart.length === 0 ? (
          <p>🛒 Your cart is empty.</p>
        ) : (
          <>
            {cart.map(item => (
              <div className="cart-item" key={item.key}>
                <img src={item.img} alt={item.name} />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                   <div className="price-info">
    <p>Price: ${item.price.toFixed(2)}</p>
    <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
  </div>
                  <div className="quantity-controls">
                    <button onClick={() => dispatch({ type: "DECREMENT", key: item.key })}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => dispatch({ type: "INCREMENT", key: item.key })}>+</button>
                  </div>
                  <button
                    className="remove-btn"
                    onClick={() => dispatch({ type: "DECREMENT", key: item.key, removeAll: true })}
                  >
                    Remove Item
                  </button>
                </div>
              </div>
            ))}

            <div className="total-price">Total Cart Price: ${total.toFixed(2)}</div>

            <button className="checkout-btn" onClick={handleCheckout}>
              🛍️ Checkout
            </button>
          </>
        )}
      </div>
    </div>
  );
}

// CartContext.jsx
import React, { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const item = action.payload;
      const existing = state.find(i => i.key === item.key);
      if (existing) {
        return state.map(i =>
          i.key === item.key ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...state, { ...item, quantity: 1 }];
      }
    case "INCREMENT":
      return state.map(i =>
        i.key === action.key ? { ...i, quantity: i.quantity + 1 } : i
      );
    case "DECREMENT":
      return state
        .map(i =>
          i.key === action.key ? { ...i, quantity: i.quantity - 1 } : i
        )
        .filter(i => i.quantity > 0);
    case "CLEAR_CART":
      return [];
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);
  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

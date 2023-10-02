import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const calculateTotalPrice = (cartItems) => {
    return cartItems.reduce((total, item) => {
      return total + item.quantity * item.price;
    }, 0);
  };

  return (
    <CartContext.Provider
      value={{ calculateTotalPrice, cartItems, setCartItems }}
    >
      {children}
    </CartContext.Provider>
  );
};

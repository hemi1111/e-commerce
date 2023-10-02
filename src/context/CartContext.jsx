import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  return (
    <CartContext.Provider
      value={{ isSearching, setIsSearching, cartItems, setCartItems }}
    >
      {children}
    </CartContext.Provider>
  );
};

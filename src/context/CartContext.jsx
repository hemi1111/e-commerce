import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (itemId) => {
    setCartItems(...cartItems);
  };

  return (
    <AppContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </AppContext.Provider>
  );
};

import React, { createContext, useContext, useState } from 'react';

// Create a context
const GlobalContext = createContext();

// Create a provider component
export const GlobalProvider = ({ children }) => {
  
  const [cartItems, setCartItems] = useState([]);
  const [savedItems, setSavedItems] = useState([]); // State for saved items

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const saveForLater = (product) => {
    setSavedItems((prevSaved) => [...prevSaved, product]);
  };

  return (
    <GlobalContext.Provider value={{
      cartItems,
      savedItems,
      addToCart,
      saveForLater,
      setCartItems, // ✅ this line is necessary
    }}>
      {children}
    </GlobalContext.Provider>
  );
  
};

// Custom hook to use the GlobalContext
export const useGlobal = () => useContext(GlobalContext);

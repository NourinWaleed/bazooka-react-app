import { createContext, useContext, useState } from "react";

const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [cart, setCart] = useState({});

  const addToCart = (meal, quantity = 1) => {
    setCart((prev) => ({
      ...prev,
      [meal.id]: {
        ...meal,
        quantity: (prev[meal.id]?.quantity || 0) + quantity,
      },
    }));
  };

  const increase = (id) => {
    setCart((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        quantity: prev[id].quantity + 1,
      },
    }));
  };

  const decrease = (id) => {
    setCart((prev) => {
      if (!prev[id]) return prev;
      const currentQty = prev[id].quantity;
      if (currentQty <= 1) {
        const { [id]: _, ...rest } = prev;
        return rest;
      }
      return {
        ...prev,
        [id]: {
          ...prev[id],
          quantity: currentQty - 1,
        },
      };
    });
  };
  const removeFromCart = (id) => {
  setCart((prev) => {
    const { [id]: _, ...rest } = prev;
    return rest;
  });
};


  return (
    <ShopContext.Provider value={{ cart, addToCart, increase, decrease,removeFromCart }}>
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => useContext(ShopContext);

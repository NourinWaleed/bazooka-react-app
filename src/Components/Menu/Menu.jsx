import React, { useState } from "react";
import { meals } from "../../assets/assets";
import { useShop } from "../../Context/ShopContext";

const Menu = () => {
  const { addToCart } = useShop();

  const menuMeals = meals.filter((meal) => meal.category === "menu");

  // state محلي لكل منتج
  const [quantities, setQuantities] = useState({});

  const increaseLocal = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const decreaseLocal = (id) => {
    setQuantities((prev) => {
      if (!prev[id] || prev[id] === 0) return prev;
      return {
        ...prev,
        [id]: prev[id] - 1,
      };
    });
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h2 className="text-3xl font-bold text-center mb-8 text-white">Our Menu</h2>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {menuMeals.map((meal) => (
          <div key={meal.id} className="rounded-lg overflow-hidden shadow">
            <img
              src={meal.image}
              alt={meal.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-white">{meal.name}</h3>
              <p className="text-gray-300 text-sm">{meal.description}</p>
              <p className="text-lg font-bold mt-2 text-white">{meal.price} EGP</p>

              <div className="flex items-center gap-2 mt-4">
                <button
                  onClick={() => decreaseLocal(meal.id)}
                  className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                >
                  -
                </button>
                <span className="text-white">{quantities[meal.id] || 0}</span>
                <button
                  onClick={() => increaseLocal(meal.id)}
                  className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700"
                >
                  +
                </button>
              </div>

              <button
                onClick={() =>
                  addToCart(meal, quantities[meal.id] || 1)
                }
                className="mt-4 w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;



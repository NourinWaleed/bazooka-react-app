
import React from "react";
import { useShop } from "../../Context/ShopContext";

export default function CartSideBar() {
  const { cart, increase, decrease } = useShop();

  const cartItems = Object.values(cart);

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.map((meal) => (
        <div key={meal.id}>
          <h3>{meal.name}</h3>
          <p>Quantity: {meal.quantity}</p>
        </div>
      ))}
    </div>
  );
}


import React, { useState } from "react";
import { useShop } from "../../Context/ShopContext";

const Cart = () => {
  const { cart, increase, decrease, removeFromCart } = useShop();

  const cartItems = Object.values(cart);

  const [showCheckout, setShowCheckout] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order Data:", formData, cartItems);
    alert("Order submitted! Check console.");
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h2 className="text-3xl font-bold text-center mb-8 text-white">
        Your Cart
      </h2>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-300">Your cart is empty.</p>
      ) : (
        <>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {cartItems.map((meal) => (
              <div
                key={meal.id}
                className="rounded-lg overflow-hidden shadow bg-gray-800"
              >
                <img
                  src={meal.image}
                  alt={meal.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-white">
                    {meal.name}
                  </h3>
                  <p className="text-gray-300 text-sm">{meal.description}</p>
                  <p className="text-lg font-bold mt-2 text-white">
                    {meal.price} EGP
                  </p>

                  <div className="flex gap-2 mt-4 items-center">
                    <button
                      onClick={() => decrease(meal.id)}
                      className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                    >
                      -
                    </button>
                    <span className="text-white">{meal.quantity}</span>
                    <button
                      onClick={() => increase(meal.id)}
                      className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => removeFromCart(meal.id)}
                    className="mt-4 w-full px-4 py-2 bg-red-700 hover:bg-red-800 text-white rounded"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {!showCheckout && (
            <button
              onClick={() => setShowCheckout(true)}
              className="mt-6 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
            >
              Checkout
            </button>
          )}
        </>
      )}

      {showCheckout && (
        <form
          onSubmit={handleSubmit}
          className="mt-6 bg-gray-800 p-4 rounded text-white space-y-4"
        >
          <h3 className="text-2xl font-bold">Checkout</h3>

          <div>
            <label className="block">Name:</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
              className="w-full p-2 rounded text-black"
            />
          </div>

          <div>
            <label className="block">Phone:</label>
            <input
              type="text"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              required
              className="w-full p-2 rounded text-black"
            />
          </div>

          <div>
            <label className="block">Address:</label>
            <textarea
              value={formData.address}
              onChange={(e) =>
                setFormData({ ...formData, address: e.target.value })
              }
              required
              className="w-full p-2 rounded text-black"
            />
          </div>

          <button
            type="submit"
            className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded"
          >
            Submit Order
          </button>
        </form>
      )}
    </div>
  );
};

export default Cart;

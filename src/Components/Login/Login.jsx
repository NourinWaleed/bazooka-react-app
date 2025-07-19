import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const registeredUser = JSON.parse(localStorage.getItem("registeredUser"));

    if (
      registeredUser &&
      registeredUser.email === formData.email &&
      registeredUser.password === formData.password
    ) {
      localStorage.setItem("loggedInUser", JSON.stringify(registeredUser));
      alert(`Welcome ${registeredUser.name}!`);
      navigate("/");
    } else {
      alert("Invalid credentials! Please try again.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-12 bg-gray-800 text-white p-6 rounded">
      <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full p-2 rounded text-black"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          className="w-full p-2 rounded text-black"
          required
        />
        <button
          type="submit"
          className="w-full py-2 bg-blue-600 hover:bg-blue-700 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;


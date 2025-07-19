import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // حفظ بيانات المستخدم للتجربة
    localStorage.setItem("registeredUser", JSON.stringify(formData));

    alert("Registered successfully! Please login.");
    navigate("/login");
  };

  return (
    <div className="max-w-md mx-auto mt-12 bg-gray-800 text-white p-6 rounded">
      <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full p-2 rounded text-black"
          required
        />
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
          className="w-full py-2 bg-green-600 hover:bg-green-700 rounded"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;

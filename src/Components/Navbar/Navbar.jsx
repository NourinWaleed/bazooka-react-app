import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black text-yellow-400 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold">
          Bazooka
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-4">
          <Link to="/" className="hover:text-yellow-300">Home</Link>
          <Link to="/menu" className="hover:text-yellow-300">Menu</Link>
          <Link to="/cart" className="hover:text-yellow-300">Cart</Link>
          <Link to="/register" className="hover:text-yellow-300">Register</Link>
          <Link to="/login" className="hover:text-yellow-300">Login</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-yellow-400 text-2xl focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile Links */}
      <div className={`md:hidden transition-all duration-300 ${isOpen ? 'block' : 'hidden'}`}>
        <div className="flex flex-col gap-2 mt-2">
          <Link to="/" className="hover:text-yellow-300" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/menu" className="hover:text-yellow-300" onClick={() => setIsOpen(false)}>Menu</Link>
          <Link to="/cart" className="hover:text-yellow-300" onClick={() => setIsOpen(false)}>Cart</Link>
          <Link to="/register" className="hover:text-yellow-300" onClick={() => setIsOpen(false)}>Register</Link>
          <Link to="/login" className="hover:text-yellow-300" onClick={() => setIsOpen(false)}>Login</Link>
        </div>
      </div>
    </nav>
  );
}


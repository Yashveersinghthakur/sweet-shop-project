// Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-pink-400 text-white p-4 flex justify-between items-center shadow-lg sticky top-0 z-50">
      <Link to="/" className="text-2xl font-bold hover:text-yellow-200 transition">Sweet Shop 🍬</Link>
      <div className="space-x-4">
        <Link to="/" className="hover:text-yellow-200 transition">Home</Link>
        <Link to="/login" className="hover:text-yellow-200 transition">Login</Link>
        <Link to="/register" className="hover:text-yellow-200 transition">Register</Link>
      </div>
    </nav>
  );
}

export default Navbar; // ✅ Make sure it’s default export

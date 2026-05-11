import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navStyles = `
  .nav { background: #fff; border-bottom: 1px solid #ffe0cc; position: sticky; top: 0; z-index: 100; }
  .nav-inner { max-width: 1100px; margin: 0 auto; padding: 0 24px; height: 68px; display: flex; align-items: center; justify-content: space-between; }
  .logo { font-family: 'Playfair Display', serif; font-size: 24px; font-weight: 900; color: #c2410c; }
  .logo span { color: #f59e0b; }
  .nav-links { display: flex; gap: 32px; align-items: center; }
  .nav-link { font-size: 14px; font-weight: 500; color: #78350f; transition: color 0.2s; }
  .nav-link:hover, .nav-link.active { color: #c2410c; }
  .hamburger { display: none; background: none; border: none; cursor: pointer; font-size: 22px; color: #c2410c; width: 40px; height: 40px; align-items: center; justify-content: center; }
  @media (max-width: 700px) {
    .nav-links { display: none; }
    .hamburger { display: flex; }
  }
`;

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="nav">
      <style>{navStyles}</style>
      <div className="nav-inner">
        <Link to="/" className="logo">Sweet<span>Bliss</span> 🍬</Link>
        <div className="nav-links">
          <Link to="/" className={`nav-link ${location.pathname === "/" ? "active" : ""}`}>Home</Link>
          <Link to="/login" className={`nav-link ${location.pathname === "/login" ? "active" : ""}`}>Login</Link>
          <Link to="/register" className={`nav-link ${location.pathname === "/register" ? "active" : ""}`}>Register</Link>
        </div>
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
      </div>
      {menuOpen && (
        <div style={{ background: "#fff", padding: "16px 24px", borderTop: "1px solid #fce7d5", display: "flex", flexDirection: "column", gap: "12px" }}>
          <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/login" className="nav-link" onClick={() => setMenuOpen(false)}>Login</Link>
          <Link to="/register" className="nav-link" onClick={() => setMenuOpen(false)}>Register</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

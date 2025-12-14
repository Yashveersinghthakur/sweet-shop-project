import React, { useState } from "react";
import SweetCard from "../components/SweetCard";

const initialSweets = [
  { id: 1, name: "Chocolate Cake", price: 250, image: "https://images.unsplash.com/photo-1617196037503-2f1f7f1a4a18?auto=format&fit=crop&w=150&q=80" },
  { id: 2, name: "Gulab Jamun", price: 50, image: "https://images.unsplash.com/photo-1628782369685-158e72c32e0c?auto=format&fit=crop&w=150&q=80" },
  { id: 3, name: "Laddu", price: 30, image: "https://images.unsplash.com/photo-1590490360185-963d4e207aa4?auto=format&fit=crop&w=150&q=80" },
  { id: 4, name: "Cupcake", price: 100, image: "https://images.unsplash.com/photo-1599785209796-3e80bfe810b5?auto=format&fit=crop&w=150&q=80" },
];

function Home() {
  const [sweets, setSweets] = useState(initialSweets);
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);

  const handleAddToCart = (sweet) => {
    setCart([...cart, sweet]);
  };

  const filteredSweets = sweets.filter((sweet) =>
    sweet.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Our Delicious Sweets 🍰</h1>

      {/* Search bar */}
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <input
          type="text"
          placeholder="Search sweets..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ padding: "10px", width: "300px", borderRadius: "5px", border: "1px solid #ccc" }}
        />
      </div>

      {/* Sweet grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        gap: "20px"
      }}>
        {filteredSweets.map((sweet) => (
          <SweetCard key={sweet.id} sweet={sweet} addToCart={handleAddToCart} />
        ))}
      </div>

      {/* Cart popup */}
      {cart.length > 0 && (
        <div style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#fff8f0",
          padding: "15px",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
          maxWidth: "300px"
        }}>
          <h3>Cart 🛒</h3>
          {cart.map((item, idx) => (
            <p key={idx}>{item.name} - ₹{item.price}</p>
          ))}
          <p>Total: ₹{cart.reduce((sum, item) => sum + item.price, 0)}</p>
        </div>
      )}
    </div>
  );
}

export default Home;

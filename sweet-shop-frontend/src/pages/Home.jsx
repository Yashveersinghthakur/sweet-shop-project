import React, { useState } from "react";
import SweetCard from "../components/SweetCard";

const SWEETS = [
  { id: 1, name: "Gulab Jamun", price: 50, emoji: "🍮", tag: "Bestseller", desc: "Soft milk-solid dumplings soaked in rose syrup", category: "Traditional" },
  { id: 2, name: "Chocolate Cake", price: 250, emoji: "🎂", tag: "Premium", desc: "Rich Belgian chocolate layered delight", category: "Bakery" },
  { id: 3, name: "Laddu", price: 30, emoji: "🟡", tag: "Classic", desc: "Besan laddus with ghee and cardamom", category: "Traditional" },
  { id: 4, name: "Cupcake", price: 100, emoji: "🧁", tag: "New", desc: "Fluffy vanilla cupcake with buttercream", category: "Bakery" },
  { id: 5, name: "Rasgulla", price: 40, emoji: "⚪", tag: "Classic", desc: "Spongy chenna balls in light sugar syrup", category: "Traditional" },
  { id: 6, name: "Barfi", price: 60, emoji: "🍬", tag: "Popular", desc: "Condensed milk fudge with pistachios", category: "Traditional" },
  { id: 7, name: "Brownie", price: 120, emoji: "🍫", tag: "New", desc: "Fudgy walnut brownie with chocolate ganache", category: "Bakery" },
  { id: 8, name: "Halwa", price: 45, emoji: "🟠", tag: "Seasonal", desc: "Semolina halwa with saffron and dry fruits", category: "Traditional" },
];

const TESTIMONIALS = [
  { name: "Priya Sharma", role: "Regular Customer", text: "The Gulab Jamun melts in your mouth. Best sweet shop in town!", stars: 5 },
  { name: "Rahul Mehra", role: "Corporate Client", text: "We order for all our office festivals. Always fresh, always perfect.", stars: 5 },
  { name: "Anita Kapoor", role: "Wedding Planner", text: "Trusted partner for all our wedding sweet arrangements. Impeccable quality.", stars: 5 },
];

const homeStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@300;400;500;600&display=swap');
  .serif { font-family: 'Playfair Display', serif; }
  .hero { background: linear-gradient(135deg, #fff7ed 0%, #fef3c7 50%, #ffedd5 100%); padding: 80px 24px 60px; text-align: center; position: relative; overflow: hidden; }
  .hero-eyebrow { display: inline-block; background: #fef3c7; color: #92400e; font-size: 13px; font-weight: 600; padding: 6px 16px; border-radius: 50px; border: 1px solid #fbbf24; margin-bottom: 24px; letter-spacing: 0.5px; text-transform: uppercase; }
  .hero h1 { font-family: 'Playfair Display', serif; font-size: clamp(36px, 6vw, 72px); font-weight: 900; color: #1c0a00; line-height: 1.1; margin-bottom: 20px; }
  .hero h1 em { color: #c2410c; font-style: italic; }
  .hero p { font-size: 18px; color: #78350f; max-width: 500px; margin: 0 auto 36px; line-height: 1.6; font-weight: 300; }
  .hero-cta { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
  .btn-primary { background: #c2410c; color: #fff; border: none; border-radius: 50px; padding: 14px 32px; font-size: 15px; font-weight: 600; cursor: pointer; transition: all 0.2s; font-family: 'DM Sans', sans-serif; }
  .btn-primary:hover { background: #9a3412; transform: translateY(-1px); }
  .btn-outline { background: transparent; color: #c2410c; border: 2px solid #c2410c; border-radius: 50px; padding: 13px 32px; font-size: 15px; font-weight: 600; cursor: pointer; transition: all 0.2s; font-family: 'DM Sans', sans-serif; }
  .stats-bar { background: #c2410c; color: #fff; padding: 20px 24px; }
  .stats-inner { max-width: 1100px; margin: 0 auto; display: flex; justify-content: center; gap: 60px; flex-wrap: wrap; }
  .stat { text-align: center; }
  .stat-num { font-family: 'Playfair Display', serif; font-size: 28px; font-weight: 900; }
  .stat-label { font-size: 12px; opacity: 0.8; margin-top: 2px; }
  .shop-section { max-width: 1100px; margin: 0 auto; padding: 60px 24px; }
  .shop-header { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px; margin-bottom: 36px; }
  .section-label { font-size: 13px; font-weight: 600; color: #c2410c; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 6px; }
  .shop-title { font-family: 'Playfair Display', serif; font-size: 36px; font-weight: 700; }
  .search-wrap { position: relative; }
  .search-input { border: 1.5px solid #fcd9b0; border-radius: 50px; padding: 10px 20px 10px 44px; font-size: 14px; font-family: 'DM Sans', sans-serif; background: #fff; width: 240px; outline: none; transition: border 0.2s; color: #1a0a00; }
  .search-input:focus { border-color: #c2410c; }
  .search-icon { position: absolute; left: 16px; top: 50%; transform: translateY(-50%); color: #c2410c; font-size: 16px; }
  .filters { display: flex; gap: 8px; margin-bottom: 32px; flex-wrap: wrap; }
  .filter-btn { border: 1.5px solid #fcd9b0; background: #fff; color: #78350f; border-radius: 50px; padding: 8px 20px; font-size: 13px; font-weight: 500; cursor: pointer; transition: all 0.2s; font-family: 'DM Sans', sans-serif; }
  .filter-btn.active, .filter-btn:hover { background: #c2410c; color: #fff; border-color: #c2410c; }
  .sweet-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 24px; }
  .testi-section { background: linear-gradient(135deg, #fff7ed, #fef3c7); padding: 60px 24px; }
  .testi-inner { max-width: 1100px; margin: 0 auto; }
  .section-title { font-family: 'Playfair Display', serif; font-size: 36px; font-weight: 700; text-align: center; margin-bottom: 40px; }
  .testi-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; }
  .testi-card { background: #fff; border-radius: 16px; padding: 24px; border: 1px solid #fce7d5; }
  .stars { color: #f59e0b; font-size: 16px; margin-bottom: 12px; }
  .testi-text { font-size: 14px; color: #78350f; line-height: 1.6; margin-bottom: 16px; font-style: italic; }
  .testi-name { font-weight: 700; font-size: 14px; }
  .testi-role { font-size: 12px; color: #92400e; }
  .site-footer { background: #1c0a00; color: #fef3c7; padding: 40px 24px 24px; }
  .footer-inner { max-width: 1100px; margin: 0 auto; }
  .footer-top { display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 40px; margin-bottom: 32px; }
  .footer-logo { font-family: 'Playfair Display', serif; font-size: 22px; font-weight: 900; color: #f59e0b; margin-bottom: 12px; }
  .footer-desc { font-size: 13px; color: #a16207; line-height: 1.6; }
  .footer-col-title { font-weight: 600; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; color: #f59e0b; margin-bottom: 12px; }
  .footer-link { font-size: 13px; color: #a16207; display: block; margin-bottom: 8px; background: none; border: none; cursor: pointer; font-family: 'DM Sans', sans-serif; padding: 0; text-align: left; }
  .footer-link:hover { color: #fef3c7; }
  .footer-bottom { border-top: 1px solid #3d1a00; padding-top: 20px; text-align: center; font-size: 12px; color: #a16207; }
  .cart-popup { position: fixed; bottom: 20px; right: 20px; background: #fff; border: 1.5px solid #fce7d5; border-radius: 16px; padding: 20px; box-shadow: 0 8px 32px rgba(194,65,12,0.15); max-width: 300px; z-index: 50; }
  .cart-popup h3 { font-family: 'Playfair Display', serif; font-size: 18px; margin-bottom: 12px; color: #1c0a00; }
  .cart-item-row { font-size: 13px; color: #78350f; margin-bottom: 6px; }
  .cart-total { font-weight: 700; color: #c2410c; font-size: 15px; margin-top: 10px; padding-top: 10px; border-top: 1px solid #fce7d5; }
  @media (max-width: 700px) {
    .shop-header { flex-direction: column; align-items: flex-start; }
    .footer-top { grid-template-columns: 1fr; gap: 24px; }
    .stats-inner { gap: 32px; }
  }
`;

function Home() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [cart, setCart] = useState([]);

  const categories = ["All", "Traditional", "Bakery"];

  const filtered = SWEETS.filter(s => {
    const matchSearch = s.name.toLowerCase().includes(search.toLowerCase());
    const matchCat = activeCategory === "All" || s.category === activeCategory;
    return matchSearch && matchCat;
  });

  const addToCart = (sweet) => {
    setCart(prev => {
      const exists = prev.find(i => i.id === sweet.id);
      if (exists) return prev.map(i => i.id === sweet.id ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { ...sweet, qty: 1 }];
    });
  };

  const total = cart.reduce((s, i) => s + i.price * (i.qty || 1), 0);

  return (
    <>
      <style>{homeStyles}</style>

      {/* Hero */}
      <section className="hero">
        <div className="hero-eyebrow">Est. 2019 · Aligarh, Uttar Pradesh</div>
        <h1 className="serif">Crafted with <em>love</em>,<br />Served with joy.</h1>
        <p>Authentic Indian mithai and modern bakery treats — made fresh daily with the finest ingredients.</p>
        <div className="hero-cta">
          <button className="btn-primary" onClick={() => document.getElementById("shop-section")?.scrollIntoView({ behavior: "smooth" })}>
            Explore Sweets ↓
          </button>
          <button className="btn-outline">Join the Family</button>
        </div>
      </section>

      {/* Stats */}
      <div className="stats-bar">
        <div className="stats-inner">
          {[["500+", "Happy Customers"], ["50+", "Sweet Varieties"], ["5★", "Average Rating"], ["10+", "Years of Joy"]].map(([n, l]) => (
            <div className="stat" key={l}>
              <div className="stat-num">{n}</div>
              <div className="stat-label">{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Shop */}
      <section className="shop-section" id="shop-section">
        <div className="shop-header">
          <div>
            <div className="section-label">Our Menu</div>
            <h2 className="shop-title serif">Choose Your Sweet</h2>
          </div>
          <div className="search-wrap">
            <span className="search-icon">🔍</span>
            <input
              className="search-input"
              placeholder="Search sweets..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
        </div>
        <div className="filters">
          {categories.map(c => (
            <button key={c} className={`filter-btn ${activeCategory === c ? "active" : ""}`} onClick={() => setActiveCategory(c)}>{c}</button>
          ))}
        </div>
        <div className="sweet-grid">
          {filtered.map(sweet => (
            <SweetCard key={sweet.id} sweet={sweet} addToCart={addToCart} />
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="testi-section">
        <div className="testi-inner">
          <div className="section-label" style={{ textAlign: "center" }}>Testimonials</div>
          <h2 className="section-title serif">What Our Customers Say</h2>
          <div className="testi-grid">
            {TESTIMONIALS.map(t => (
              <div className="testi-card" key={t.name}>
                <div className="stars">{"★".repeat(t.stars)}</div>
                <p className="testi-text">"{t.text}"</p>
                <div className="testi-name">{t.name}</div>
                <div className="testi-role">{t.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-top">
            <div>
              <div className="footer-logo">SweetBliss 🍬</div>
              <p className="footer-desc">Bringing joy through authentic flavors since 2019. Every sweet is handcrafted with love.</p>
            </div>
            <div>
              <div className="footer-col-title">Quick Links</div>
              <span className="footer-link">Home</span>
              <span className="footer-link">Login</span>
              <span className="footer-link">Register</span>
            </div>
            <div>
              <div className="footer-col-title">Contact</div>
              <span className="footer-link">📍 Aligarh, Uttar Pradesh</span>
              <span className="footer-link">👤 YashVeer Singh</span>
              <span className="footer-link">📞 +91 98765 43210</span>
              <span className="footer-link">✉️ hello@sweetbliss.in</span>
            </div>
          </div>
          <div className="footer-bottom">© 2025 SweetBliss by YashVeer Singh. All rights reserved. Made with ❤️ in Aligarh.</div>
        </div>
      </footer>

      {/* Cart Popup */}
      {cart.length > 0 && (
        <div className="cart-popup">
          <h3>Cart 🛒</h3>
          {cart.map((item, idx) => (
            <div className="cart-item-row" key={idx}>{item.emoji} {item.name} × {item.qty || 1} — ₹{item.price * (item.qty || 1)}</div>
          ))}
          <div className="cart-total">Total: ₹{total}</div>
        </div>
      )}
    </>
  );
}

export default Home;

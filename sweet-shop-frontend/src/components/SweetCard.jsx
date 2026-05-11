import React, { useState } from "react";

const TAG_COLORS = {
  Bestseller: { bg: "#fef3c7", color: "#92400e", border: "#fbbf24" },
  Premium:    { bg: "#ede9fe", color: "#5b21b6", border: "#a78bfa" },
  Classic:    { bg: "#dcfce7", color: "#166534", border: "#4ade80" },
  New:        { bg: "#fee2e2", color: "#991b1b", border: "#f87171" },
  Popular:    { bg: "#ffedd5", color: "#9a3412", border: "#fb923c" },
  Seasonal:   { bg: "#e0f2fe", color: "#075985", border: "#38bdf8" },
};

const cardStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=DM+Sans:wght@300;400;500;600&display=swap');
  .sweet-card { background: #fff; border: 1.5px solid #fce7d5; border-radius: 20px; overflow: hidden; transition: all 0.3s; position: relative; }
  .sweet-card:hover { transform: translateY(-4px); box-shadow: 0 20px 40px rgba(194,65,12,0.12); border-color: #fb923c; }
  .sweet-emoji-wrap { background: linear-gradient(135deg, #fff7ed, #fef3c7); height: 160px; display: flex; align-items: center; justify-content: center; font-size: 72px; position: relative; }
  .sweet-tag { position: absolute; top: 12px; right: 12px; font-size: 11px; font-weight: 600; padding: 4px 10px; border-radius: 50px; border: 1px solid; }
  .sweet-body { padding: 20px; }
  .sweet-name { font-family: 'Playfair Display', serif; font-size: 20px; font-weight: 700; margin-bottom: 6px; color: #1c0a00; }
  .sweet-desc { font-size: 13px; color: #92400e; line-height: 1.5; margin-bottom: 16px; font-weight: 300; }
  .sweet-footer { display: flex; align-items: center; justify-content: space-between; }
  .sweet-price { font-size: 22px; font-weight: 700; color: #c2410c; font-family: 'Playfair Display', serif; }
  .sweet-price span { font-size: 13px; font-weight: 400; color: #92400e; font-family: 'DM Sans', sans-serif; }
  .add-btn { background: #c2410c; color: #fff; border: none; border-radius: 50px; padding: 9px 18px; font-size: 13px; font-weight: 600; cursor: pointer; transition: all 0.2s; font-family: 'DM Sans', sans-serif; }
  .add-btn:hover { background: #9a3412; }
  .add-btn.added { background: #16a34a; transform: scale(0.95); }
`;

function SweetCard({ sweet, addToCart }) {
  const [added, setAdded] = useState(false);
  const tc = TAG_COLORS[sweet.tag] || TAG_COLORS["Classic"];

  const handleAdd = () => {
    addToCart(sweet);
    setAdded(true);
    setTimeout(() => setAdded(false), 600);
  };

  return (
    <>
      <style>{cardStyles}</style>
      <div className="sweet-card">
        <div className="sweet-emoji-wrap">
          {sweet.emoji}
          {sweet.tag && (
            <span className="sweet-tag" style={{ background: tc.bg, color: tc.color, borderColor: tc.border }}>
              {sweet.tag}
            </span>
          )}
        </div>
        <div className="sweet-body">
          <div className="sweet-name">{sweet.name}</div>
          <div className="sweet-desc">{sweet.desc || "A delicious handcrafted sweet made fresh daily."}</div>
          <div className="sweet-footer">
            <div className="sweet-price">₹{sweet.price} <span>/ piece</span></div>
            <button className={`add-btn ${added ? "added" : ""}`} onClick={handleAdd}>
              {added ? "✓ Added" : "+ Add"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SweetCard;

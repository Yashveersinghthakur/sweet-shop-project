import React from "react";

function SweetCard({ sweet, addToCart }) {
  return (
    <div style={{
      border: "1px solid #ffd1b3",
      borderRadius: "10px",
      padding: "15px",
      textAlign: "center",
      backgroundColor: "#fff8f0",
      boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
    }}>
      <img src={sweet.image} alt={sweet.name} style={{ width: "150px", height: "150px", borderRadius: "10px" }} />
      <h3>{sweet.name}</h3>
      <p>₹ {sweet.price}</p>
      <button
        onClick={() => addToCart(sweet)}
        style={{
          backgroundColor: "#ff6f61",
          color: "#fff",
          padding: "8px 15px",
          borderRadius: "5px",
          marginTop: "10px"
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default SweetCard;

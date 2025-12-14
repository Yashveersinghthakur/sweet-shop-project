import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Login with email: ${email}`);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
      <form onSubmit={handleLogin} style={{
        padding: "30px",
        border: "1px solid #ffd1b3",
        borderRadius: "10px",
        backgroundColor: "#fff8f0",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
      }}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ width: "100%", padding: "10px", marginBottom: "15px", borderRadius: "5px" }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ width: "100%", padding: "10px", marginBottom: "15px", borderRadius: "5px" }}
        />
        <button type="submit" style={{
          width: "100%",
          padding: "10px",
          backgroundColor: "#ff6f61",
          color: "#fff",
          borderRadius: "5px"
        }}>Login</button>
      </form>
    </div>
  );
}

export default Login;

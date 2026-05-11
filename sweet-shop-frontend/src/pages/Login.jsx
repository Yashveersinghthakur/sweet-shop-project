import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const loginStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=DM+Sans:wght@300;400;500;600&display=swap');
  .auth-page { min-height: calc(100vh - 68px); display: flex; align-items: center; justify-content: center; padding: 40px 24px; background: linear-gradient(135deg, #fff7ed 0%, #fef3c7 100%); }
  .auth-card { background: #fff; border-radius: 24px; padding: 48px 40px; width: 100%; max-width: 420px; border: 1px solid #fce7d5; box-shadow: 0 24px 60px rgba(194,65,12,0.1); }
  .auth-top { text-align: center; margin-bottom: 32px; }
  .auth-icon { font-size: 48px; margin-bottom: 16px; }
  .auth-title { font-family: 'Playfair Display', serif; font-size: 28px; font-weight: 700; margin-bottom: 8px; color: #1c0a00; }
  .auth-sub { font-size: 14px; color: #92400e; }
  .form-group { margin-bottom: 18px; }
  .form-label { font-size: 12px; font-weight: 600; color: #78350f; text-transform: uppercase; letter-spacing: 0.5px; display: block; margin-bottom: 8px; }
  .form-input { width: 100%; border: 1.5px solid #fce7d5; border-radius: 12px; padding: 12px 16px; font-size: 15px; font-family: 'DM Sans', sans-serif; outline: none; transition: border 0.2s; color: #1c0a00; background: #fffaf5; }
  .form-input:focus { border-color: #c2410c; background: #fff; }
  .form-submit { width: 100%; background: #c2410c; color: #fff; border: none; border-radius: 50px; padding: 15px; font-size: 15px; font-weight: 700; cursor: pointer; font-family: 'DM Sans', sans-serif; transition: background 0.2s; margin-top: 8px; }
  .form-submit:hover { background: #9a3412; }
  .auth-switch { text-align: center; margin-top: 20px; font-size: 14px; color: #78350f; }
  .auth-switch-link { color: #c2410c; font-weight: 600; cursor: pointer; background: none; border: none; font-family: 'DM Sans', sans-serif; font-size: 14px; }
`;

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Login with email: ${email}`);
    navigate("/");
  };

  return (
    <>
      <style>{loginStyles}</style>
      <div className="auth-page">
        <div className="auth-card">
          <div className="auth-top">
            <div className="auth-icon">🍮</div>
            <h2 className="auth-title">Welcome Back</h2>
            <p className="auth-sub">Sign in to continue your sweet journey</p>
          </div>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input className="form-input" type="email" placeholder="you@example.com" value={email} onChange={e => setEmail(e.target.value)} required />
            </div>
            <div className="form-group">
              <label className="form-label">Password</label>
              <input className="form-input" type="password" placeholder="Your password" value={password} onChange={e => setPassword(e.target.value)} required />
            </div>
            <button type="submit" className="form-submit">Sign In</button>
          </form>
          <p className="auth-switch">
            New here?{" "}
            <button className="auth-switch-link" onClick={() => navigate("/register")}>Create an account</button>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;

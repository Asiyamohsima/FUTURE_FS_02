import React, { useState } from "react";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "admin123") {
      onLogin(true);
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // full screen height
        background: "linear-gradient(135deg, #007BFF 0%, #00CFFF 100%)", // nice gradient
      }}
    >
      <div
        style={{
          background: "white",
          padding: "50px 40px",
          borderRadius: "15px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
          width: "400px",
          maxWidth: "90%",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "#007BFF", marginBottom: "30px" }}>Admin Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{
              display: "block",
              margin: "15px 0",
              padding: "12px",
              width: "100%",
              borderRadius: "8px",
              border: "1px solid #ccc",
              fontSize: "16px",
            }}
            required
          />
          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              display: "block",
              margin: "15px 0",
              padding: "12px",
              width: "100%",
              borderRadius: "8px",
              border: "1px solid #ccc",
              fontSize: "16px",
            }}
            required
          />
          <button
            style={{
              background: "#007BFF",
              color: "white",
              padding: "12px",
              width: "100%",
              border: "none",
              borderRadius: "8px",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
import React, { useState } from "react";
import LeadForm from "./LeadForm";
import LeadList from "./LeadList";
import Login from "./Login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [refresh, setRefresh] = useState(false);

  if (!isLoggedIn) {
    return <Login onLogin={setIsLoggedIn} />;
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "30px",
        fontFamily: "Arial, sans-serif",
        background: "linear-gradient(135deg, #00CFFF, #007BFF)",
      }}
    >
      <div style={{ maxWidth: "1000px", margin: "auto", background: "#fff", borderRadius: "15px", padding: "20px", boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}>
        <h1 style={{ textAlign: "center", color: "#007BFF", marginBottom: "20px" }}>CRM Lead Manager</h1>

        <button
          onClick={() => setIsLoggedIn(false)}
          style={{
            float: "right",
            marginBottom: "20px",
            background: "#FF4C4C",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Logout
        </button>

        <LeadForm onAdd={() => setRefresh(!refresh)} />
        <LeadList key={refresh} />
      </div>
    </div>
  );
}

export default App;
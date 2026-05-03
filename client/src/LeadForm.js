import React, { useState } from "react";
import axios from "axios";

function LeadForm({ onAdd }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [source, setSource] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://127.0.0.1:5000/api/leads", { name, email, source, status: "new", notes: [] });
      setName("");
      setEmail("");
      setSource("");
      onAdd();
    } catch (err) {
      console.log(err);
      alert("Failed to add lead");
    }
  };

  return (
    <div style={{
      background: "#f5f5f5",
      padding: "20px",
      borderRadius: "15px",
      marginBottom: "25px",
      boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
      maxWidth: "100%",
    }}>
      <h2 style={{ color: "#007BFF", marginBottom: "20px", textAlign: "center" }}>Add New Lead</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ flex: "1 1 100%", padding: "12px", borderRadius: "8px", border: "1px solid #ccc" }}
          required
        />
        <input
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ flex: "1 1 100%", padding: "12px", borderRadius: "8px", border: "1px solid #ccc" }}
          required
        />
        <input
          placeholder="Source"
          value={source}
          onChange={(e) => setSource(e.target.value)}
          style={{ flex: "1 1 100%", padding: "12px", borderRadius: "8px", border: "1px solid #ccc" }}
        />
        <button
          style={{
            flex: "1 1 100%",
            background: "#007BFF",
            color: "white",
            padding: "12px",
            border: "none",
            borderRadius: "8px",
            fontSize: "16px",
            cursor: "pointer",
            marginTop: "5px",
          }}
        >
          Add Lead
        </button>
      </form>
    </div>
  );
}

export default LeadForm;
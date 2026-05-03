import React, { useEffect, useState } from "react";
import axios from "axios";

function LeadList() {
  const [leads, setLeads] = useState([]);
  const [statusFilter, setStatusFilter] = useState("");
  const [search, setSearch] = useState("");

  const fetchLeads = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:5000/api/leads");
      setLeads(res.data);
    } catch (err) {
      console.log(err);
      alert("Failed to fetch leads");
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const updateStatus = async (id, status) => {
    try {
      await axios.put(`http://127.0.0.1:5000/api/leads/${id}`, { status });
      fetchLeads();
    } catch (err) {
      console.log(err);
      alert("Failed to update status");
    }
  };

  const addNote = async (id, noteText) => {
    try {
      await axios.put(`http://127.0.0.1:5000/api/leads/${id}`, {
        $push: { notes: { text: noteText, date: new Date() } },
      });
      fetchLeads();
    } catch (err) {
      console.log(err);
      alert("Failed to add note");
    }
  };

  const deleteLead = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:5000/api/leads/${id}`);
      fetchLeads();
    } catch (err) {
      console.log(err);
      alert("Failed to delete lead");
    }
  };

  const filteredLeads = leads.filter(
    (lead) =>
      (statusFilter === "" || lead.status === statusFilter) &&
      (lead.name.toLowerCase().includes(search.toLowerCase()) ||
        lead.email.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div>
      <div style={{ marginBottom: "15px", display: "flex", flexWrap: "wrap", gap: "10px" }}>
        <input
          placeholder="Search by name or email"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ flex: "1 1 200px", padding: "8px", borderRadius: "8px", border: "1px solid #ccc" }}
        />
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          style={{ flex: "1 1 150px", padding: "8px", borderRadius: "8px", border: "1px solid #ccc" }}
        >
          <option value="">All Status</option>
          <option value="new">New</option>
          <option value="contacted">Contacted</option>
          <option value="converted">Converted</option>
        </select>
      </div>

      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", borderRadius: "10px", overflow: "hidden" }}>
          <thead>
            <tr style={{ background: "#007BFF", color: "white" }}>
              <th style={{ padding: "12px" }}>Name</th>
              <th style={{ padding: "12px" }}>Email</th>
              <th style={{ padding: "12px" }}>Status</th>
              <th style={{ padding: "12px" }}>Source</th>
              <th style={{ padding: "12px" }}>Notes</th>
              <th style={{ padding: "12px" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredLeads.map((lead) => (
              <tr
                key={lead._id}
                style={{ textAlign: "center", transition: "all 0.2s", cursor: "pointer" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#e6f0ff")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
              >
                <td style={{ padding: "10px" }}>{lead.name}</td>
                <td style={{ padding: "10px" }}>{lead.email}</td>
                <td style={{ padding: "10px" }}>
                  <select
                    value={lead.status}
                    onChange={(e) => updateStatus(lead._id, e.target.value)}
                    style={{ padding: "6px", borderRadius: "5px", border: "1px solid #ccc" }}
                  >
                    <option value="new">New</option>
                    <option value="contacted">Contacted</option>
                    <option value="converted">Converted</option>
                  </select>
                </td>
                <td style={{ padding: "10px" }}>{lead.source}</td>
                <td style={{ padding: "10px" }}>
                  {lead.notes && lead.notes.map((n, i) => <div key={i}>{n.text}</div>)}
                  <input
                    placeholder="Add note"
                    style={{ padding: "5px", width: "90%", marginTop: "5px", borderRadius: "5px", border: "1px solid #ccc" }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        addNote(lead._id, e.target.value);
                        e.target.value = "";
                      }
                    }}
                  />
                </td>
                <td style={{ padding: "10px" }}>
                  <button
                    style={{
                      background: "#FF4C4C",
                      color: "white",
                      padding: "6px 12px",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                    onClick={() => deleteLead(lead._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default LeadList;
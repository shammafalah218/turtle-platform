"use client";

import { useEffect, useState } from "react";

type Turtle = {
  id: string;
  name: string;
  location: string;
  habitat: string;
  riskLevel: string;
  status: string;
};

export default function Dashboard() {
  const [turtles, setTurtles] = useState<Turtle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadTurtles() {
      const response = await fetch("/api/turtles");
      const result = await response.json();
      setTurtles(result.data);
      setLoading(false);
    }

    loadTurtles();
  }, []);

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#eef7f6",
        fontFamily: "Arial, sans-serif",
        padding: "40px",
        color: "#123",
      }}
    >
      <section style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <a
          href="/"
          style={{
            color: "#0f766e",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          ← Back to Home
        </a>

        <h1
          style={{
            fontSize: "40px",
            color: "#0f766e",
            marginTop: "25px",
          }}
        >
          Turtle SafePath AI Dashboard
        </h1>

        <p
          style={{
            fontSize: "18px",
            color: "#475569",
            lineHeight: "1.7",
            maxWidth: "850px",
          }}
        >
          This dashboard gets turtle tracking data from the backend API and
          displays it in a clear way.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
            gap: "20px",
            marginTop: "30px",
          }}
        >
          <div style={cardStyle}>
            <h2>🐢 Tracked Turtles</h2>
            <p style={numberStyle}>{turtles.length}</p>
            <p>Number of turtles loaded from the backend API.</p>
          </div>

          <div style={cardStyle}>
            <h2>🗺️ Habitat Zones</h2>
            <p style={numberStyle}>5</p>
            <p>Important areas for feeding, resting, and migration.</p>
          </div>

          <div style={cardStyle}>
            <h2>⚠️ Risk Areas</h2>
            <p style={numberStyle}>3</p>
            <p>Possible danger areas such as boats and coastal activity.</p>
          </div>

          <div style={cardStyle}>
            <h2>📍 API Status</h2>
            <p style={numberStyle}>{loading ? "..." : "OK"}</p>
            <p>Shows if the backend turtle data loaded successfully.</p>
          </div>
        </div>

        <div
          style={{
            marginTop: "35px",
            background: "white",
            borderRadius: "18px",
            padding: "25px",
            boxShadow: "0 4px 18px rgba(0,0,0,0.08)",
          }}
        >
          <h2 style={{ color: "#0f766e" }}>Turtle Data from Backend API</h2>

          {loading ? (
            <p>Loading turtle data...</p>
          ) : (
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                marginTop: "15px",
                fontSize: "16px",
              }}
            >
              <thead>
                <tr style={{ background: "#ccfbf1" }}>
                  <th style={thStyle}>Turtle ID</th>
                  <th style={thStyle}>Name</th>
                  <th style={thStyle}>Location</th>
                  <th style={thStyle}>Habitat</th>
                  <th style={thStyle}>Risk Level</th>
                  <th style={thStyle}>Status</th>
                </tr>
              </thead>

              <tbody>
                {turtles.map((turtle) => (
                  <tr key={turtle.id}>
                    <td style={tdStyle}>{turtle.id}</td>
                    <td style={tdStyle}>{turtle.name}</td>
                    <td style={tdStyle}>{turtle.location}</td>
                    <td style={tdStyle}>{turtle.habitat}</td>
                    <td style={tdStyle}>{turtle.riskLevel}</td><td style={tdStyle}>{turtle.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </section>
    </main>
  );
}

const cardStyle = {
  background: "white",
  borderRadius: "18px",
  padding: "22px",
  boxShadow: "0 4px 18px rgba(0,0,0,0.08)",
  border: "1px solid #d1fae5",
};

const numberStyle = {
  fontSize: "34px",
  fontWeight: "bold",
  color: "#0f766e",
  margin: "10px 0",
};

const thStyle = {
  padding: "12px",
  textAlign: "left" as const,
  borderBottom: "1px solid #99f6e4",
};

const tdStyle = {
  padding: "12px",
  borderBottom: "1px solid #e2e8f0",
};
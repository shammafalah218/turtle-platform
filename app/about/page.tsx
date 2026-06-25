export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f4f8f7",
        fontFamily: "Arial, sans-serif",
        color: "#123",
        padding: "40px",
      }}
    >
      <section
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          background: "white",
          borderRadius: "20px",
          padding: "40px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
        }}
      >
        <h1 style={{ fontSize: "42px", marginBottom: "10px", color: "#0f766e" }}>
          Turtle SafePath AI
        </h1>

        <h2 style={{ fontSize: "22px", fontWeight: "normal", color: "#334155" }}>
          Marine Turtle Tracking and Habitat Analytics Platform
        </h2>

        <p style={{ fontSize: "18px", lineHeight: "1.7", marginTop: "25px" }}>
          This platform is designed to help study marine turtle movement using
          tracking data, artificial intelligence, and geospatial analysis. It aims
          to support turtle conservation by showing movement routes, important
          habitat areas, and possible risk zones.
        </p>

        <div
          style={{
            display: "flex",
            gap: "15px",
            marginTop: "30px",
            flexWrap: "wrap",
          }}
        >
          <a href="/dashboard" style={buttonStyle}>
            Open Dashboard
          </a>

          <a href="/turtle-tracker" style={buttonStyle}>
            Open Turtle Tracker
          </a>

          <a href="/risk-zones" style={buttonStyle}>
            Open Risk Zones
          </a>

          <a href="/about" style={buttonStyle}>
            About Project
          </a>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
            marginTop: "35px",
          }}
        >
          <div style={cardStyle}>
            <h3>🐢 Turtle Tracking</h3>
            <p>View turtle movement routes and tracking information.</p>
          </div>

          <div style={cardStyle}>
            <h3>🗺️ Habitat Analysis</h3>
            <p>Understand feeding, resting, and migration areas.</p>
          </div>

          <div style={cardStyle}>
            <h3>⚠️ Risk Zones</h3>
            <p>Identify possible threats such as boats and coastal activity.</p>
          </div>

          <div style={cardStyle}>
            <h3>📊 Dashboard</h3>
            <p>Display turtle project data in a simple organized way.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

const cardStyle = {
  background: "#ecfdf5",
  padding: "20px",
  borderRadius: "15px",
  border: "1px solid #99f6e4",
};

const buttonStyle = {
  display: "inline-block",
  background: "#0f766e",
  color: "white",
  padding: "14px 22px",
  borderRadius: "10px",
  textDecoration: "none",
  fontWeight: "bold",
};
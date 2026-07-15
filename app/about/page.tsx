import type { CSSProperties } from "react";

export default function AboutProject() {
  return (
    <main style={pageStyle}>
      <nav style={navStyle}>
        <a href="/" style={logoStyle}>
          <img
  src="/logo.png"
  alt="Marine Turtle Tracker logo"
  style={{
    width: "90x",
    height: "90px",
    objectFit: "contain",
    borderRadius: "14px",
    background: "#ecfeff",
    padding: "4px",
  }}
/>
          <span>Marine Turtle Tracker</span>
        </a>

        <div style={navLinksStyle}>
          <a href="/" style={navLinkStyle}>Home</a>
          <a href="/dashboard" style={navLinkStyle}>Dashboard</a>
          <a href="/turtle-tracker" style={navLinkStyle}>Tracker</a>
          <a href="/risk-zones" style={navLinkStyle}>Risk Zones</a>
        </div>
      </nav>

      <section style={heroStyle}>
        <p style={badgeStyle}>About the Platform</p>

        <h1 style={titleStyle}>Marine Turtle Tracker</h1>

        <p style={descriptionStyle}>
          Marine Turtle Tracker is a web platform designed to support marine
          turtle monitoring by organizing turtle tracking data, showing movement
          locations, displaying habitat information, and highlighting possible
          risk zones.
        </p>
      </section>

      <section style={contentGridStyle}>
        <div style={cardStyle}>
          <h2>🎯 Project Purpose</h2>
          <p>
            The purpose of this platform is to help users understand turtle
            movement, habitat areas, and possible threats in a simple and visual
            way. It supports conservation work by making tracking data easier to
            view and explain.
          </p>
        </div>

        <div style={cardStyle}>
          <h2>🐢 Turtle Tracking</h2>
          <p>
            The tracker page allows users to select a turtle ID and view its
            location on Google Maps. This helps show how turtle movement can be
            connected to real geographic locations.
          </p>
        </div>

        <div style={cardStyle}>
          <h2>📊 Dashboard</h2>
          <p>
            The dashboard displays turtle data from the backend API and database,
            including turtle ID, name, location, habitat, risk level, and status.
          </p>
        </div>

        <div style={cardStyle}>
          <h2>⚠️ Risk Zones</h2>
          <p>
            The risk zones page explains possible threats such as boat traffic,
            fishing activity, coastal development, and pollution, with suggested
            protection actions.
          </p>
        </div>
      </section>

     
    </main>
  );
}

const pageStyle: CSSProperties = {
  minHeight: "100vh",
  background:
    "radial-gradient(circle at top left, #99f6e4 0, transparent 30%), linear-gradient(135deg, #ecfeff 0%, #f0fdfa 45%, #f8fafc 100%)",
  fontFamily: "Arial, sans-serif",
  color: "#0f172a",
  padding: "24px",
};

const navStyle: CSSProperties = {
  maxWidth: "1180px",
  margin: "0 auto 28px auto",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  background: "rgba(255,255,255,0.78)",
  backdropFilter: "blur(12px)",
  padding: "16px 22px",
  borderRadius: "22px",
  boxShadow: "0 10px 30px rgba(15,118,110,0.12)",
  border: "1px solid rgba(20,184,166,0.22)",
};

const logoStyle: CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  fontSize: "22px",
  fontWeight: "bold",
  color: "#0f766e",
  textDecoration: "none",
};

const logoIconStyle: CSSProperties = {
  background: "#ccfbf1",
  padding: "8px",
  borderRadius: "14px",
};

const navLinksStyle: CSSProperties = {
  display: "flex",
  gap:"10px",
  flexWrap: "wrap",
};

const navLinkStyle: CSSProperties = {
  color: "#0f766e",
  textDecoration: "none",
  fontWeight: "bold",
  padding: "10px 14px",
  borderRadius: "999px",
  background: "#ecfdf5",
  border: "1px solid #99f6e4",
};

const heroStyle: CSSProperties = {
  maxWidth: "1180px",
  margin: "0 auto 26px auto",
  background: "rgba(255,255,255,0.78)",
  borderRadius: "30px",
  padding: "40px",
  boxShadow: "0 16px 38px rgba(15,118,110,0.12)",
  border: "1px solid rgba(20,184,166,0.22)",
};

const badgeStyle: CSSProperties = {
  display: "inline-block",
  background: "#ccfbf1",
  color: "#0f766e",
  padding: "10px 16px",
  borderRadius: "999px",
  fontWeight: "bold",
};

const titleStyle: CSSProperties = {
  fontSize: "50px",
  lineHeight: "1.08",
  color: "#115e59",
  margin: "18px 0",
};

const descriptionStyle: CSSProperties = {
  fontSize: "18px",
  lineHeight: "1.8",
  color: "#334155",
  maxWidth: "900px",
};

const contentGridStyle: CSSProperties = {
  maxWidth: "1180px",
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: "18px",
};

const cardStyle: CSSProperties = {
  background: "rgba(255,255,255,0.86)",
  borderRadius: "24px",
  padding: "24px",
  boxShadow: "0 14px 32px rgba(15,118,110,0.10)",
  border: "1px solid rgba(20,184,166,0.22)",
  lineHeight: "1.7",
  color: "#334155",
};

const techSectionStyle: CSSProperties = {
  maxWidth: "1180px",
  margin: "24px auto 0 auto",
  background: "rgba(255,255,255,0.86)",
  borderRadius: "30px",
  padding: "28px",
  boxShadow: "0 16px 38px rgba(15,118,110,0.10)",
  border: "1px solid rgba(20,184,166,0.22)",
};

const techGridStyle: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
  gap: "14px",
  marginTop: "18px",
};

const techItemStyle: CSSProperties = {
  background: "#f0fdfa",
  color: "#0f766e",
  border: "1px solid #99f6e4",
  borderRadius: "16px",
  padding: "14px",
  textAlign: "center",
  fontWeight: "bold",
};
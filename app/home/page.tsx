import type { CSSProperties } from "react";

export default function HomePage() {
  return (
    <main style={pageStyle}>
        <div className="floating-turtle turtle-one">🐢</div>
<div className="floating-turtle turtle-two">🐢</div>
<div className="floating-turtle turtle-three">🐢</div>
      <nav style={navStyle}>
        <a href="/home" style={logoStyle}>
          <img src="/logo.png" alt="Marine Turtle Tracker logo" style={logoImageStyle} />
          <span style={logoTextStyle}>Marine Turtle Tracker</span>
        </a>

        <div style={navLinksStyle}>
          <a href="/dashboard" style={navLinkStyle}>Dashboard</a>
         
          <a href="/turtle-tracker" style={navLinkStyle}>Tracker</a>
          <a href="/risk-zones" style={navLinkStyle}>Risk Zones</a>
          <a href="/about" style={navLinkStyle}>About</a>
        </div>
      </nav>

      <section style={heroStyle}>
        <div style={heroCardStyle}>
          <p style={badgeStyle}>LIVE TRACKING PLATFORM</p>

          <h1 style={titleStyle}>Marine Turtle Tracker</h1>

          <p style={descriptionStyle}>
            A clean monitoring platform for tracking marine turtle movement,
            viewing habitat areas, checking risk zones, and displaying turtle
            data from the connected database.
          </p>

          <div style={buttonRowStyle}>
            <a href="/turtle-tracker" style={primaryButtonStyle}>
              Open Live Tracker
            </a>

            <a href="/dashboard" style={secondaryButtonStyle}>
              View Dashboard
            </a>
          </div>
        </div>

        <div style={overviewCardStyle}>
          <p style={badgeStyle}>SYSTEM OVERVIEW</p>

          <h2 style={overviewTitleStyle}>Marine Tracking Control</h2>

          <div style={gridStyle}>
            <div style={boxStyle}>
              <span>Tracked Turtles</span>
              <strong>3</strong>
            </div>

            <div style={boxStyle}>
              <span>Database</span>
              <strong>Connected</strong>
            </div>

            <div style={boxStyle}>
              <span>API Status</span>
              <strong>Active</strong>
            </div>

            <div style={boxStyle}>
              <span>Map View</span>
              <strong>Google Maps</strong>
            </div>
          </div>
        </div>
      </section>

      <section style={cardsStyle}>
        <a href="/dashboard" style={cardStyle}>
          <h3>Dashboard</h3>
          <p>View turtle records from the backend API and database.</p>
        </a>

        <a href="/turtle-tracker" style={cardStyle}>
          <h3>Live Tracker</h3>
          <p>Select each turtle ID and view its Google Maps location.</p>
        </a>

        <a href="/risk-zones" style={cardStyle}>
          <h3>Risk Zones</h3>
          <p>Review specific risk locations and possible threats.</p>
        </a>
      </section>
    </main>
  );
}

const pageStyle: CSSProperties = {
  minHeight: "100vh",
  background:
    "radial-gradient(circle at top left, #99f6e4 0, transparent 28%), linear-gradient(135deg, #ecfeff 0%, #f8fafc 50%, #ffffff 100%)",
  fontFamily: "Arial, sans-serif",
  padding: "24px",
  color: "#0f172a",
};

const navStyle: CSSProperties = {
  maxWidth: "1180px",
  margin: "0 auto 28px auto",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  background: "rgba(255,255,255,0.92)",
  padding: "14px 22px",
  borderRadius: "26px",
  boxShadow: "0 14px 34px rgba(15,118,110,0.12)",
  border: "1px solid #99f6e4",
};

const logoStyle: CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "12px",
  textDecoration: "none",
};

const logoImageStyle: CSSProperties = {
  width: "76px",
  height: "76px",
  objectFit: "contain",
};

const logoTextStyle: CSSProperties = {
  color: "#0f766e",
  fontWeight: "bold",
  fontSize: "24px",
};

const navLinksStyle: CSSProperties = {
  display: "flex",
  gap: "10px",
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
  maxWidth:"1180px",
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
  gap: "26px",
};

const heroCardStyle: CSSProperties = {
  background: "rgba(255,255,255,0.92)",
  borderRadius: "30px",
  padding: "42px",
  boxShadow: "0 18px 42px rgba(15,118,110,0.12)",
  border: "1px solid #99f6e4",
};

const overviewCardStyle: CSSProperties = {
  background: "rgba(255,255,255,0.92)",
  borderRadius: "30px",
  padding: "42px",
  boxShadow: "0 18px 42px rgba(15,118,110,0.12)",
  border: "1px solid #99f6e4",
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
  fontSize: "54px",
  lineHeight: "1.06",
  color: "#115e59",
  margin: "18px 0",
};

const descriptionStyle: CSSProperties = {
  fontSize: "18px",
  lineHeight: "1.8",
  color: "#334155",
};

const overviewTitleStyle: CSSProperties = {
  color: "#115e59",
  fontSize: "34px",
  margin: "18px 0 22px",
};

const buttonRowStyle: CSSProperties = {
  display: "flex",
  gap: "14px",
  flexWrap: "wrap",
  marginTop: "26px",
};

const primaryButtonStyle: CSSProperties = {
  background: "#0f766e",
  color: "white",
  padding: "14px 22px",
  borderRadius: "14px",
  textDecoration: "none",
  fontWeight: "bold",
};

const secondaryButtonStyle: CSSProperties = {
  background: "white",
  color: "#0f766e",
  padding: "14px 22px",
  borderRadius: "14px",
  textDecoration: "none",
  fontWeight: "bold",
  border: "1px solid #5eead4",
};

const gridStyle: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "14px",
};

const boxStyle: CSSProperties = {
  background: "#f0fdfa",
  border: "1px solid #99f6e4",
  borderRadius: "18px",
  padding: "18px",
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  color: "#0f766e",
};

const cardsStyle: CSSProperties = {
  maxWidth: "1180px",
  margin: "28px auto 0 auto",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
  gap: "18px",
};

const cardStyle: CSSProperties = {
  background: "rgba(255,255,255,0.92)",
  borderRadius: "22px",
  padding: "24px",
  border: "1px solid #99f6e4",
  boxShadow: "0 12px 28px rgba(15,118,110,0.10)",
  color: "#0f172a",
  textDecoration: "none",
};
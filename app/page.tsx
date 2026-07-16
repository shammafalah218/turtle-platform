import type { CSSProperties } from "react";

export default function LandingPage() {
  return (
    <main style={pageStyle}>
      <video
        src="/turtle-video.mp4"
        autoPlay
        muted
        loop
        playsInline
        style={videoBackgroundStyle}
      />

      <div style={overlayStyle} />

      <nav style={navStyle}>
        <a href="/" style={brandStyle}>
          <img
            src="/logo.png"
            alt="Marine Turtle Tracker logo"
            style={logoStyle}
          />
          <span>Marine Turtle Tracker</span>
        </a>

        <div style={navButtonsStyle}>
          <a href="/login" style={loginButtonStyle}>
            Login
          </a>

          <a href="/register" style={registerButtonStyle}>
            Registration
          </a>
        </div>
      </nav>

      <section style={heroStyle}>
        

        <h1 style={titleStyle}>Track. Monitor. Protect.</h1>

        <p style={descriptionStyle}>
          Marine Turtle Tracker is a web platform that helps monitor marine
          turtle movement, view tracking data, and identify risk zones to
          support turtle protection and conservation efforts.
        </p>

        <div style={cardsStyle}>
          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>Live Tracking</h3>
            <p style={cardTextStyle}>
              View turtle locations and movement data in a clear dashboard.
            </p>
          </div>

          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>Risk Zones</h3>
            <p style={cardTextStyle}>
              Identify areas that may affect turtle safety and migration.
            </p>
          </div>

          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>Marine Protection</h3>
            <p style={cardTextStyle}>
              Support monitoring decisions with simple and organized data.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

const pageStyle: CSSProperties = {
  minHeight: "100vh",
  position: "relative",
  overflow: "hidden",
  fontFamily: "Arial, sans-serif",
  color: "white",
};

const videoBackgroundStyle: CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  zIndex: 0,
};

const overlayStyle: CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background:
    "linear-gradient(135deg, rgba(6, 78, 59, 0.78), rgba(15, 118, 110, 0.55), rgba(8, 47, 73, 0.78))",
  zIndex: 1,
};

const navStyle: CSSProperties = {
  position: "relative",
  zIndex: 2,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "28px 60px",
};

const brandStyle: CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "12px",
  textDecoration: "none",
  color: "white",
  fontWeight: "bold",
  fontSize: "22px",
};

const logoStyle: CSSProperties = {
  width: "58px",
  height: "58px",
  objectFit: "contain",
  background: "rgba(255, 255, 255, 0.9)",
  borderRadius: "50%",
  padding: "6px",
};

const navButtonsStyle: CSSProperties = {
  display: "flex",
  gap: "14px",
};

const loginButtonStyle: CSSProperties = {
  background: "white",
  color: "#0f766e",
  padding: "12px 28px",
  borderRadius: "999px",
  textDecoration: "none",
  fontWeight: "bold",
  boxShadow: "0 12px 30px rgba(0,0,0,0.18)",
};

const registerButtonStyle: CSSProperties = {
  background: "rgba(255,255,255,0.16)",
  color: "white",
  padding: "12px 28px",
  borderRadius: "999px",
  textDecoration: "none",
  fontWeight: "bold",
  border: "1px solid rgba(255,255,255,0.65)",
  backdropFilter: "blur(8px)",
};

const heroStyle: CSSProperties = {
  position: "relative",
  zIndex: 2,
  minHeight: "calc(100vh - 120px)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  padding: "20px 28px 70px",
};

const tagStyle: CSSProperties = {
  margin: "0 0 18px",
  color:"#ccfbf1",
  fontWeight: "bold",
  letterSpacing: "2px",
  textTransform: "uppercase",
};

const titleStyle: CSSProperties = {
  fontSize: "76px",
  lineHeight: "1.05",
  margin: "0 0 24px",
  fontWeight: "bold",
  textShadow: "0 10px 28px rgba(0,0,0,0.28)",
};

const descriptionStyle: CSSProperties = {
  maxWidth: "820px",
  fontSize: "22px",
  lineHeight: "1.7",
  margin: "0 auto 38px",
  color: "#ecfeff",
  textShadow: "0 8px 22px rgba(0,0,0,0.25)",
};

const cardsStyle: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "18px",
  maxWidth: "950px",
  width: "100%",
};

const cardStyle: CSSProperties = {
  background: "rgba(255,255,255,0.14)",
  border: "1px solid rgba(255,255,255,0.35)",
  borderRadius: "24px",
  padding: "24px",
  backdropFilter: "blur(12px)",
  boxShadow: "0 18px 40px rgba(0,0,0,0.16)",
};

const cardTitleStyle: CSSProperties = {
  margin: "0 0 10px",
  color: "white",
  fontSize: "22px",
};

const cardTextStyle: CSSProperties = {
  margin: 0,
  color: "#ecfeff",
  lineHeight: "1.6",
};
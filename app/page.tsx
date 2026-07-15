import type { CSSProperties } from "react";

export default function LandingPage() {
  return (
    <main style={pageStyle}>
      <div className="floating-turtle turtle-one">🐢</div>
<div className="floating-turtle turtle-two">🐢</div>
<div className="floating-turtle turtle-three">🐢</div>
      <div style={cardStyle}>
        <img
          src="/logo.png"
          alt="Marine Turtle Tracker logo"
          style={logoStyle}
        />

        <h1 style={titleStyle}>Marine Turtle Tracker</h1>

        <p style={textStyle}>
          Please login or register to access the turtle tracking platform.
        </p>

        <div style={buttonRowStyle}>
          <a href="/login" style={loginButtonStyle}>
            Login
          </a>

          <a href="/register" style={registerButtonStyle}>
            Registration
          </a>
        </div>
      </div>
    </main>
  );
}

const pageStyle: CSSProperties = {
  minHeight: "100vh",
  background:
    "radial-gradient(circle at top left, #99f6e4 0, transparent 30%), linear-gradient(135deg, #ecfeff 0%, #f8fafc 55%, #ffffff 100%)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "Arial, sans-serif",
  padding: "24px",
};

const cardStyle: CSSProperties = {
  width: "100%",
  maxWidth: "520px",
  background: "rgba(255,255,255,0.94)",
  borderRadius: "34px",
  padding: "42px",
  border: "1px solid #99f6e4",
  boxShadow: "0 24px 60px rgba(15,118,110,0.16)",
  textAlign: "center",
};

const logoStyle: CSSProperties = {
  width: "110px",
  height: "110px",
  objectFit: "contain",
  marginBottom: "14px",
};

const titleStyle: CSSProperties = {
  color: "#115e59",
  fontSize: "40px",
  margin: "10px 0",
};

const textStyle: CSSProperties = {
  color: "#475569",
  fontSize: "17px",
  lineHeight: "1.6",
  marginBottom: "28px",
};

const buttonRowStyle: CSSProperties = {
  display: "flex",
  gap: "14px",
  justifyContent: "center",
  flexWrap: "wrap",
};

const loginButtonStyle: CSSProperties = {
  background: "#0f766e",
  color: "white",
  padding: "15px 28px",
  borderRadius: "14px",
  textDecoration: "none",
  fontWeight: "bold",
  minWidth: "140px",
};

const registerButtonStyle: CSSProperties = {
  background: "white",
  color: "#0f766e",
  padding: "15px 28px",
  borderRadius: "14px",
  textDecoration: "none",
  fontWeight: "bold",
  border: "1px solid #5eead4",
  minWidth: "140px",
};
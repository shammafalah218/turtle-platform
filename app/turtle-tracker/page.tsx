"use client";

import { useState } from "react";
import type { CSSProperties } from "react";

type Turtle = {
  id: string;
  name: string;
  location: string;
  habitat: string;
  status: string;
  risk: string;
  lat: number;
  lng: number;
  pinStyle: CSSProperties;
};

const turtles: Turtle[] = [
  {
    id: "T-001",
    name: "Fujairah Turtle",
    location: "Offshore Fujairah Coast",
    habitat: "Feeding Area",
    status: "Active Tracking",
    risk: "Medium",
    lat: 25.145,
    lng: 56.485,
    pinStyle: { left: "47%", top: "62%" },
  },
  {
    id: "T-002",
    name: "Khor Fakkan Turtle",
    location: "Offshore Khor Fakkan",
    habitat: "Migration Route",
    status: "Moving",
    risk: "Low",
    lat: 25.335,
    lng: 56.49,
    pinStyle: { left: "52%", top: "43%" },
  },
  {
    id: "T-003",
    name: "Dibba Turtle",
    location: "Offshore Dibba Coast",
    habitat: "Resting Area",
    status: "Needs Monitoring",
    risk: "High",
    lat: 25.62,
    lng: 56.5,
    pinStyle: { left: "57%", top: "22%" },
  },
];

export default function TurtleTrackerPage() {
  const [selectedId, setSelectedId] = useState("ALL");

  const selectedTurtle = turtles.find((turtle) => turtle.id === selectedId);

  const mapUrl =
    selectedId === "ALL"
      ? "https://www.google.com/maps?q=25.37,56.49&z=9&output=embed"
      : "https://www.google.com/maps?q=" +
        selectedTurtle?.lat +
        "," +
        selectedTurtle?.lng +
        "&z=11&output=embed";

  return (
    <main style={pageStyle}>
      <nav style={navStyle}>
        <a href="/home" style={logoStyle}>
          <img src="/logo.png" alt="Marine Turtle Tracker logo" style={logoImageStyle} />
          <span style={logoTextStyle}>Marine Turtle Tracker</span>
        </a>

        <div style={navLinksStyle}>
          <a href="/home" style={navLinkStyle}>Home</a>
          <a href="/dashboard" style={navLinkStyle}>Dashboard</a>
          
          <a href="/risk-zones" style={navLinkStyle}>Risk Zones</a>
          <a href="/about" style={navLinkStyle}>About</a>
        </div>
      </nav>

      <section style={heroStyle}>
        <p style={badgeStyle}>LIVE TURTLE TRACKER</p>
        <h1 style={titleStyle}>Marine Turtle Movement Map</h1>
        <p style={descriptionStyle}>
          Select one turtle to view its exact location, or click All to display
          all tracked turtles on the map.
        </p>
      </section>

      <section style={contentStyle}>
        <div style={mapCardStyle}>
          <div style={mapHeaderStyle}>
            <div>
              <h2 style={sectionTitleStyle}>Selected Turtle Location</h2>
              <p style={subTextStyle}>
                Showing:{" "}
                <strong>
                  {selectedId === "ALL"
                    ? "All Tracked Turtles"
                    : `${selectedTurtle?.id} — ${selectedTurtle?.location}`}
                </strong>
              </p>
            </div>

            <span style={activeBadgeStyle}>● Map Active</span>
          </div>

          <div style={selectedInfoStyle}>
            {selectedId === "ALL" ? (
              <>
                <strong>All Turtle Locations</strong>
                <span>
                  Fujairah Coast, Khor Fakkan, and Dibba Coast are displayed on the map.
                </span>
              </>
            ) : (
              <>
                <strong>
                  {selectedTurtle?.id} {selectedTurtle?.name}
                </strong>
                <span>
                  Location: {selectedTurtle?.location} | Habitat: {selectedTurtle?.habitat}
                </span>
              </>
            )}

            <a
              href={
                selectedId === "ALL"
                  ? "https://www.google.com/maps?q=25.37,56.49"
                  : `https://www.google.com/maps?q=${selectedTurtle?.lat},${selectedTurtle?.lng}`
              }
              target="_blank"
              style={googleButtonStyle}
            >
              Open in Google Maps</a>
          </div>

          <div style={mapWrapperStyle}>
            <iframe
              src={mapUrl}
              style={iframeStyle}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {selectedId === "ALL" &&
              turtles.map((turtle) => (
                <div
                  key={turtle.id}
                  style={{
                    ...allPinStyle,
                    ...turtle.pinStyle,
                  }}
                >
                  📍 {turtle.id}
                </div>
              ))}
          </div>
        </div>

        <div style={listCardStyle}>
          <h2 style={sectionTitleStyle}>Tracking List</h2>
          <p style={subTextStyle}>
            Click All to show every turtle, or select one turtle ID.
          </p>

          <button
            onClick={() => setSelectedId("ALL")}
            style={{
              ...allButtonStyle,
              ...(selectedId === "ALL" ? selectedButtonStyle : {}),
            }}
          >
            🌍 ALL TURTLES
            <span style={buttonSmallTextStyle}>
              Show all turtle locations on the map
            </span>
          </button>

          {turtles.map((turtle) => (
            <button
              key={turtle.id}
              onClick={() => setSelectedId(turtle.id)}
              style={{
                ...turtleButtonStyle,
                ...(selectedId === turtle.id ? selectedButtonStyle : {}),
              }}
            >
              <span style={turtleIconStyle}>🐢</span>

              <div style={buttonTextStyle}>
                <strong>
                  {turtle.id} {turtle.name}
                </strong>
                <span>Location: {turtle.location}</span>
                <span>Status: {turtle.status}</span>
                <span>Habitat: {turtle.habitat}</span>
              </div>
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}

const pageStyle: CSSProperties = {
  minHeight: "100vh",
  background:
    "radial-gradient(circle at top left, #99f6e4 0, transparent 28%), linear-gradient(135deg, #ecfeff 0%, #f8fafc 50%, #ffffff 100%)",
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
  maxWidth: "1180px",
  margin: "0 auto 28px auto",
  background: "rgba(255,255,255,0.92)",
  borderRadius: "30px",
  padding: "36px",
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
  color: "#115e59",
  fontSize: "46px",
  margin: "18px 0",
};

const descriptionStyle: CSSProperties = {
  color: "#334155",
  fontSize: "17px",
  lineHeight: "1.7",
};

const contentStyle: CSSProperties = {
  maxWidth: "1180px",
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "1.5fr 1fr",
  gap: "24px",
  alignItems:"start",
};

const mapCardStyle: CSSProperties = {
  background: "rgba(255,255,255,0.94)",
  borderRadius: "28px",
  padding: "24px",
  boxShadow: "0 18px 42px rgba(15,118,110,0.12)",
  border: "1px solid #99f6e4",
};

const listCardStyle: CSSProperties = {
  background: "rgba(255,255,255,0.94)",
  borderRadius: "28px",
  padding: "24px",
  boxShadow: "0 18px 42px rgba(15,118,110,0.12)",
  border: "1px solid #99f6e4",
};

const mapHeaderStyle: CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  gap: "18px",
  alignItems: "center",
};

const sectionTitleStyle: CSSProperties = {
  color: "#115e59",
  marginTop: 0,
  marginBottom: "6px",
};

const subTextStyle: CSSProperties = {
  color: "#475569",
  lineHeight: "1.6",
};

const activeBadgeStyle: CSSProperties = {
  background: "#dcfce7",
  color: "#166534",
  padding: "10px 14px",
  borderRadius: "999px",
  fontWeight: "bold",
  whiteSpace: "nowrap",
};

const selectedInfoStyle: CSSProperties = {
  background: "#f0fdfa",
  border: "1px solid #99f6e4",
  borderRadius: "18px",
  padding: "16px",
  margin: "18px 0",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "14px",
  flexWrap: "wrap",
  color: "#334155",
};

const googleButtonStyle: CSSProperties = {
  background: "#0f766e",
  color: "white",
  textDecoration: "none",
  padding: "12px 18px",
  borderRadius: "14px",
  fontWeight: "bold",
};

const mapWrapperStyle: CSSProperties = {
  height: "450px",
  borderRadius: "22px",
  overflow: "hidden",
  border: "1px solid #99f6e4",
  position: "relative",
};

const iframeStyle: CSSProperties = {
  width: "100%",
  height: "100%",
  border: 0,
};

const allPinStyle: CSSProperties = {
  position: "absolute",
  background: "#0f766e",
  color: "white",
  padding: "8px 12px",
  borderRadius: "999px",
  fontWeight: "bold",
  boxShadow: "0 10px 25px rgba(15,118,110,0.25)",
  zIndex: 5,
};

const allButtonStyle: CSSProperties = {
  width: "100%",
  textAlign: "left",
  padding: "18px",
  borderRadius: "18px",
  border: "2px solid #0f766e",
  background: "#ccfbf1",
  color: "#0f766e",
  cursor: "pointer",
  marginBottom: "16px",
  fontWeight: "bold",
  fontSize: "16px",
};

const turtleButtonStyle: CSSProperties = {
  width: "100%",
  display: "flex",
  gap: "16px",
  textAlign: "left",
  padding: "18px",
  borderRadius: "18px",
  border: "1px solid #99f6e4",
  background: "#f0fdfa",
  cursor: "pointer",
  marginBottom: "14px",
};

const selectedButtonStyle: CSSProperties = {
  background: "#ccfbf1",
  border: "2px solid #0f766e",
};

const turtleIconStyle: CSSProperties = {
  fontSize: "24px",
};

const buttonTextStyle: CSSProperties = {
  display: "grid",
  gap: "7px",
  color: "#334155",
};

const buttonSmallTextStyle: CSSProperties = {
  display: "block",
  color: "#475569",
  fontWeight: "normal",
  marginTop: "6px",
};
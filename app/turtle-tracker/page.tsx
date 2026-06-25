export default function TurtleTracker() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f0fdfa",
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
          Turtle Tracker
        </h1>

        <p
          style={{
            fontSize: "18px",
            color: "#475569",
            lineHeight: "1.7",
            maxWidth: "850px",
          }}
        >
          This page shows sample turtle tracking information. The goal is to
          visualize turtle movement routes and identify important locations along
          the coast.
        </p>

        <div
          style={{
            background: "white",
            borderRadius: "20px",
            padding: "30px",
            marginTop: "30px",
            boxShadow: "0 4px 18px rgba(0,0,0,0.08)",
          }}
        >
          <h2 style={{ color: "#0f766e" }}>Sample Tracking Map</h2>

          <div
            style={{
              height: "360px",
              background:
                "linear-gradient(135deg, #bae6fd 0%, #ccfbf1 50%, #d9f99d 100%)",
              borderRadius: "18px",
              marginTop: "20px",
              position: "relative",
              overflow: "hidden",
              border: "2px solid #99f6e4",
            }}
          >
            <div style={pointOne}>🐢 T-001</div>
            <div style={pointTwo}>🐢 T-002</div>
            <div style={pointThree}>⚠️ Risk Zone</div>

            <div
              style={{
                position: "absolute",
                left: "15%",
                top: "55%",
                width: "70%",
                borderTop: "4px dashed #0f766e",
                transform: "rotate(-12deg)",
              }}
            ></div>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
            marginTop: "30px",
          }}
        >
          <div style={cardStyle}>
            <h3>🐢 Turtle T-001</h3>
            <p>Location: Fujairah Coast</p>
            <p>Status: Active tracking</p>
            <p>Habitat: Feeding area</p>
          </div>

          <div style={cardStyle}>
            <h3>🐢 Turtle T-002</h3>
            <p>Location: Khor Fakkan</p>
            <p>Status: Migration route</p>
            <p>Habitat: Coastal movement</p>
          </div>

          <div style={cardStyle}>
            <h3>⚠️ Risk Alert</h3>
            <p>Area: Boat activity zone</p>
            <p>Risk Level: Medium</p>
            <p>Action: Monitor movement</p>
          </div>
        </div>
      </section>
    </main>
  );
}

const cardStyle = {
  background: "white",
  borderRadius: "16px",
  padding: "22px",
  boxShadow: "0 4px 18px rgba(0,0,0,0.08)",
  border: "1px solid #99f6e4",
};

const pointOne = {
  position: "absolute" as const,
  left: "15%",
  top: "55%",
  background: "white",
  padding: "10px 14px",
  borderRadius: "12px",
  fontWeight: "bold",
};

const pointTwo = {
  position: "absolute" as const,
  right: "18%",
  top: "35%",
  background: "white",
  padding: "10px 14px",
  borderRadius: "12px",
  fontWeight: "bold",
};

const pointThree = {
  position: "absolute" as const,
  right: "28%",
  bottom: "20%",
  background: "#fee2e2",
  color: "#991b1b",
  padding: "10px 14px",
  borderRadius: "12px",
  fontWeight: "bold",
};
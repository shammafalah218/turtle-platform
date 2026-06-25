export default function RiskZones() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#fff7ed",
        fontFamily: "Arial, sans-serif",
        padding: "40px",
        color: "#123",
      }}
    >
      <section style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <a
          href="/"
          style={{
            color: "#c2410c",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          ← Back to Home
        </a>

        <h1
          style={{
            fontSize: "40px",
            color: "#c2410c",
            marginTop: "25px",
          }}
        >
          Risk Zones
        </h1>

        <p
          style={{
            fontSize: "18px",
            color: "#475569",
            lineHeight: "1.7",
            maxWidth: "850px",
          }}
        >
          This page shows possible risk zones that may affect marine turtles.
          These risks include boat traffic, coastal development, pollution, and
          fishing activity.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "20px",
            marginTop: "30px",
          }}
        >
          <div style={cardStyle}>
            <h2>🚤 Boat Traffic</h2>
            <p>
              Some turtle routes may pass through areas with high boat movement,
              which can increase the risk of collision.
            </p>
            <strong style={{ color: "#dc2626" }}>Risk Level: High</strong>
          </div>

          <div style={cardStyle}>
            <h2>🏗️ Coastal Development</h2>
            <p>
              Construction near coastal areas can disturb turtle habitats and
              nesting or resting zones.
            </p>
            <strong style={{ color: "#ea580c" }}>Risk Level: Medium</strong>
          </div>

          <div style={cardStyle}>
            <h2>🗑️ Pollution</h2>
            <p>
              Plastic waste and water pollution can harm turtles and affect their
              feeding areas.
            </p>
            <strong style={{ color: "#ea580c" }}>Risk Level: Medium</strong>
          </div>

          <div style={cardStyle}>
            <h2>🎣 Fishing Activity</h2>
            <p>
              Fishing nets and bycatch can be dangerous for marine turtles during
              migration and feeding.
            </p>
            <strong style={{ color: "#dc2626" }}>Risk Level: High</strong>
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
          <h2 style={{ color: "#c2410c" }}>Risk Summary</h2>

          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              marginTop: "15px",
              fontSize: "16px",
            }}
          >
            <thead>
              <tr style={{ background: "#fed7aa" }}>
                <th style={thStyle}>Area</th>
                <th style={thStyle}>Main Risk</th>
                <th style={thStyle}>Risk Level</th>
                <th style={thStyle}>Suggested Action</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td style={tdStyle}>Fujairah Coast</td>
                <td style={tdStyle}>Boat Traffic</td>
                <td style={tdStyle}>High</td>
                <td style={tdStyle}>Monitor turtle movement</td>
              </tr>

              <tr>
                <td style={tdStyle}>Khor Fakkan</td>
                <td style={tdStyle}>Coastal Activity</td>
                <td style={tdStyle}>Medium</td>
                <td style={tdStyle}>Identify safe routes</td>
              </tr>

              <tr>
                <td style={tdStyle}>Dibba Coast</td>
                <td style={tdStyle}>Fishing Activity</td>
                <td
                style={tdStyle}>High</td>
                <td style={tdStyle}>Avoid risk zones</td>
              </tr>
            </tbody>
          </table>
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
  border: "1px solid #fed7aa",
};

const thStyle = {
  padding: "12px",
  textAlign: "left" as const,
  borderBottom: "1px solid #fdba74",
};

const tdStyle = {
  padding: "12px",
  borderBottom: "1px solid #e2e8f0",
};
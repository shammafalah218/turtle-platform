"use client";

import { useEffect, useState, type CSSProperties } from "react";

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
    <main className="animated-page" style={pageStyle}>
      <nav style={navStyle}>
        <a href="/" style={logoStyle}>
          <img
  src="/logo.png"
  alt="Marine Turtle Tracker logo"
  style={{
    width: "110px",
    height: "80px",
    objectFit: "contain",
    borderRadius: "14px",
    background: "#ecfeff",
    padding: "4px",
  }}
/>
          <span>Marine Turtle Tracker AI</span>
        </a>

        <div style={navLinksStyle}>
          <a href="/" style={navLinkStyle}>Home</a>
          <a href="/turtle-tracker" style={navLinkStyle}>Tracker</a>
          <a href="/risk-zones" style={navLinkStyle}>Risk Zones</a>
          <a href="/about" style={navLinkStyle}>About</a>
        </div>
      </nav>

      <section style={heroStyle}>
        <div>
          <p style={badgeStyle}>Dashboard Overview</p>

          <h1 style={titleStyle}>
            Turtle Tracking Intelligence Dashboard
          </h1>

          <p style={descriptionStyle}>
            This dashboard displays turtle tracking data from the backend API and
            PostgreSQL database. It helps organize turtle records, habitat
            information, and risk levels in one clean view.
          </p>
        </div>

        <div style={statusCardStyle}>
          <p style={{ margin: 0, color: "#64748b", fontWeight: "bold" }}>
            API Connection
          </p>

          <h2 style={{ margin: "10px 0", color: "#0f766e", fontSize: "34px" }}>
            {loading ? "Loading..." : "Connected"}
          </h2>

          <p style={{ margin: 0, color: "#475569", lineHeight: "1.6" }}>
            Turtle data is loaded from the backend API and database.
          </p>
        </div>
      </section>

      <section style={statsGridStyle}>
        <div style={statCardStyle}>
          <span style={statIconStyle}>🐢</span>
          <p style={statNumberStyle}>{turtles.length}</p>
          <p style={statLabelStyle}>Tracked Turtles</p>
        </div>

        <div style={statCardStyle}>
          <span style={statIconStyle}>🗺️</span>
          <p style={statNumberStyle}>5</p>
          <p style={statLabelStyle}>Habitat Zones</p>
        </div>

        <div style={statCardStyle}>
          <span style={statIconStyle}>⚠️</span>
          <p style={statNumberStyle}>3</p>
          <p style={statLabelStyle}>Risk Areas</p>
        </div>

        <div style={statCardStyle}>
          <span style={statIconStyle}>🗄️</span>
          <p style={statNumberStyle}>DB</p>
          <p style={statLabelStyle}>Database Active</p>
        </div>
      </section>

      <section style={contentGridStyle}>
        <div style={tableCardStyle}>
          <div style={sectionHeaderStyle}>
            <div>
              <h2 style={sectionTitleStyle}>Turtle Records</h2>
              <p style={sectionSubtitleStyle}>
                Live sample data loaded from the database.
              </p>
            </div>

            <span style={databaseBadgeStyle}>PostgreSQL + Prisma</span>
          </div>

          {loading ? (
            <p>Loading turtle data...</p>
          ) : (
            <div style={{ overflowX: "auto" }}>
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={thStyle}>Turtle ID</th>
                    <th style={thStyle}>Name</th>
                    <th style={thStyle}>Location</th>
                    <th style={thStyle}>Habitat</th>
                    <th style={thStyle}>Risk</th>
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
                      <td style={tdStyle}>
                        <span
                          style={{
                            ...riskBadgeStyle,
                            background:
                              turtle.riskLevel === "High"
                                ? "#fee2e2"
                                : turtle.riskLevel === "Medium"
                                ? "#ffedd5"
                                : "#dcfce7",
                            color:
                              turtle.riskLevel === "High"
                                ? "#991b1b"
                                : turtle.riskLevel === "Medium"
                                ? "#9a3412"
                                : "#166534",
                          }}
                        >
                          {turtle.riskLevel}
                        </span>
                      </td>
                      <td style={tdStyle}>{turtle.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        <div style={mapCardStyle}>
          <div style={sectionHeaderStyle}>
            <div>
              <h2 style={sectionTitleStyle}>Movement Snapshot</h2>
              <p style={sectionSubtitleStyle}>
                Simple visual map of turtle routes and risk areas.
              </p>
            </div>
          </div>

          <div style={miniMapStyle}>
            <div style={routeOneStyle}></div>
            <div style={routeTwoStyle}></div>

            <div style={pointOneStyle}>🐢 T-001</div>
            <div style={pointTwoStyle}>🐢 T-002</div>
            <div style={pointThreeStyle}>🐢 T-003</div>
            <div style={dangerStyle}>⚠️ Risk</div>

            <div style={mapTextStyle}>Fujairah Coastal Zone</div>
          </div>

          <div style={mapLegendStyle}>
            <span>🐢 Turtle location</span>
            <span>⚠️ Risk zone</span>
            <span>--- Movement path</span>
          </div>
        </div>
      </section>
    </main>
  );
}

const pageStyle: CSSProperties = {
  minHeight: "100vh",
  background:
    "radial-gradient(circle at top right, #99f6e4 0, transparent 28%), linear-gradient(135deg, #ecfeff 0%, #f0fdfa 45%, #f8fafc 100%)",
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
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "2fr 1fr",
  gap: "22px",
  alignItems: "stretch",
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
  fontSize: "46px",
  lineHeight: "1.08",
  color:"#115e59",
  margin: "18px 0",
};

const descriptionStyle: CSSProperties = {
  fontSize: "18px",
  lineHeight: "1.8",
  color: "#334155",
  maxWidth: "760px",
};

const statusCardStyle: CSSProperties = {
  background: "rgba(255,255,255,0.82)",
  borderRadius: "26px",
  padding: "28px",
  boxShadow: "0 16px 38px rgba(15,118,110,0.14)",
  border: "1px solid rgba(20,184,166,0.22)",
};

const statsGridStyle: CSSProperties = {
  maxWidth: "1180px",
  margin: "28px auto",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gap: "18px",
};

const statCardStyle: CSSProperties = {
  background: "rgba(255,255,255,0.82)",
  borderRadius: "24px",
  padding: "24px",
  boxShadow: "0 14px 32px rgba(15,118,110,0.10)",
  border: "1px solid rgba(20,184,166,0.22)",
};

const statIconStyle: CSSProperties = {
  fontSize: "30px",
};

const statNumberStyle: CSSProperties = {
  fontSize: "36px",
  fontWeight: "bold",
  color: "#0f766e",
  margin: "12px 0 4px",
};

const statLabelStyle: CSSProperties = {
  color: "#475569",
  margin: 0,
  fontWeight: "bold",
};

const contentGridStyle: CSSProperties = {
  maxWidth: "1180px",
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "1.5fr 1fr",
  gap: "22px",
};

const tableCardStyle: CSSProperties = {
  background: "rgba(255,255,255,0.88)",
  borderRadius: "26px",
  padding: "26px",
  boxShadow: "0 16px 38px rgba(15,118,110,0.12)",
  border: "1px solid rgba(20,184,166,0.22)",
};

const mapCardStyle: CSSProperties = {
  background: "rgba(255,255,255,0.88)",
  borderRadius: "26px",
  padding: "26px",
  boxShadow: "0 16px 38px rgba(8,47,73,0.12)",
  border: "1px solid rgba(20,184,166,0.22)",
};

const sectionHeaderStyle: CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "12px",
  marginBottom: "18px",
};

const sectionTitleStyle: CSSProperties = {
  margin: 0,
  color: "#115e59",
  fontSize: "26px",
};

const sectionSubtitleStyle: CSSProperties = {
  margin: "6px 0 0",
  color: "#64748b",
};

const databaseBadgeStyle: CSSProperties = {
  background: "#ecfdf5",
  color: "#0f766e",
  border: "1px solid #99f6e4",
  borderRadius: "999px",
  padding: "8px 12px",
  fontWeight: "bold",
  whiteSpace: "nowrap",
};

const tableStyle: CSSProperties = {
  width: "100%",
  borderCollapse: "collapse",
  fontSize: "15px",
};

const thStyle: CSSProperties = {
  textAlign: "left",
  padding: "14px",
  background: "#ccfbf1",
  color: "#115e59",
};

const tdStyle: CSSProperties = {
  padding: "14px",
  borderBottom: "1px solid #e2e8f0",
  color: "#334155",
};

const riskBadgeStyle: CSSProperties = {
  padding: "7px 10px",
  borderRadius: "999px",
  fontWeight: "bold",
};

const miniMapStyle: CSSProperties = {
  height: "340px",
  borderRadius: "22px",
  position: "relative",
  overflow: "hidden",
  background:
    "linear-gradient(135deg, #0ea5e9 0%, #67e8f9 44%, #ccfbf1 45%, #a7f3d0 65%, #fde68a 100%)",
  border: "2px solid #99f6e4",
};

const routeOneStyle: CSSProperties = {
  position: "absolute",
  width: "70%",
  borderTop: "4px dashed #0f766e",
  left: "12%",
  top: "54%",
  transform: "rotate(-15deg)",
};

const routeTwoStyle: CSSProperties = {
  position: "absolute",
  width: "42%",
  borderTop: "4px dashed #f97316",
  right: "8%",
  top: "68%",
  transform: "rotate(18deg)",
};

const pointOneStyle: CSSProperties = {
  position: "absolute",
  left: "10%",
  top: "55%",
  background: "white",
  padding: "10px 12px",
  borderRadius: "12px",
  fontWeight: "bold",
};

const pointTwoStyle: CSSProperties = {
  position: "absolute",
  right: "15%",
  top: "34%",
  background: "white",
  padding: "10px 12px",
  borderRadius: "12px",
  fontWeight: "bold",
};

const pointThreeStyle: CSSProperties = {
  position: "absolute",
  left: "38%",
  bottom: "18%",
  background: "white",
  padding: "10px 12px",
  borderRadius: "12px",
  fontWeight: "bold",
};

const dangerStyle: CSSProperties = {
  position: "absolute",
  right: "12%",
  bottom: "16%",
  background: "#fee2e2",
  color: "#991b1b",
  padding: "10px 12px",
  borderRadius:"12px",
  fontWeight: "bold",
};

const mapTextStyle: CSSProperties = {
  position: "absolute",
  left: "18px",
  top: "18px",
  background: "rgba(255,255,255,0.68)",
  padding: "9px 12px",
  borderRadius: "999px",
  fontWeight: "bold",
  color: "#075985",
};

const mapLegendStyle: CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  gap: "10px",
  marginTop: "14px",
  color: "#475569",
  fontWeight: "bold",
};
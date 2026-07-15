import type { CSSProperties } from "react";

const riskLocations = [
  {
    location: "Fujairah Port Approach Area",
    coordinates: "25.1250, 56.3650",
    mainRisk: "Heavy boat traffic near port entry route",
    riskLevel: "High",
    action:
      "Monitor turtle movement when it is close to the port approach area and mark this zone as unsafe for turtle movement.",
  },
  {
    location: "Khor Fakkan Port Approach Area",
    coordinates: "25.3480, 56.3630",
    mainRisk: "Vessel movement near port and shipping route",
    riskLevel: "High",
    action:
      "Alert users if a turtle location is close to the Khor Fakkan port movement area.",
  },
  {
    location: "Dibba Al-Fujairah Fishing Harbour Area",
    coordinates: "25.5900, 56.3560",
    mainRisk: "Fishing boats and possible fishing nets",
    riskLevel: "Medium",
    action:
      "Monitor turtles near fishing activity and recommend avoiding this area during active fishing times.",
  },
  {
    location: "Al Aqah / Snoopy Island Reef Area",
    coordinates: "25.4922, 56.3642",
    mainRisk: "Tourism boats, diving activity, and reef disturbance",
    riskLevel: "Medium",
    action:
      "Reduce disturbance near the reef area and monitor turtle movement around tourism and diving activity.",
  },
  {
    location: "Offshore Turtle Feeding Point T-001",
    coordinates: "25.1450, 56.4850",
    mainRisk: "Sensitive feeding habitat",
    riskLevel: "Low",
    action:
      "Continue regular monitoring and protect this feeding point from pollution or human disturbance.",
  },
];

export default function RiskZonesPage() {
  return (
    <main style={pageStyle}>
      <nav style={navStyle}>
        <a href="/home" style={logoStyle}>
          <img
            src="/logo.png"
            alt="Marine Turtle Tracker logo"
            style={logoImageStyle}
          />
          <span style={logoTextStyle}>Marine Turtle Tracker</span>
        </a>

        <div style={navLinksStyle}>
          <a href="/home" style={navLinkStyle}>Home</a>
          <a href="/dashboard" style={navLinkStyle}>Dashboard</a>
          <a href="/turtle-tracker" style={navLinkStyle}>Tracker</a>
          <a href="/about" style={navLinkStyle}>About</a>
        </div>
      </nav>

      <section style={heroStyle}>
        <p style={badgeStyle}>SPECIFIC RISK LOCATIONS</p>

        <h1 style={titleStyle}>Marine Turtle Risk Zones</h1>

        <p style={descriptionStyle}>
          This page identifies specific marine risk locations using exact project
          coordinates. Each location includes the main risk, risk level, and the
          suggested protection action.
        </p>
      </section>

      <section style={cardsGridStyle}>
        {riskLocations.map((item) => (
          <div key={item.location} style={riskCardStyle}>
            <div style={cardTopStyle}>
              <h3 style={cardTitleStyle}>{item.location}</h3>
              <span style={getRiskBadgeStyle(item.riskLevel)}>
                {item.riskLevel}
              </span>
            </div>

            <p style={coordinateStyle}>{item.coordinates}</p>

            <p style={cardTextStyle}>
              <strong>Main Risk:</strong> {item.mainRisk}
            </p>

            <p style={cardTextStyle}>
              <strong>Suggested Action:</strong> {item.action}
            </p>
          </div>
        ))}
      </section>

      <section style={tableCardStyle}>
        <div style={tableHeaderStyle}>
          <div>
            <h2 style={tableTitleStyle}>Risk Zone Table</h2>
            <p style={tableSubtitleStyle}>
              Specific risk locations with coordinates, risk levels, and actions.
            </p>
          </div>

          <span style={assessmentBadgeStyle}>Risk Assessment</span>
        </div>

        <div style={tableWrapperStyle}>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Specific Location</th>
                <th style={thStyle}>Coordinates</th>
                <th style={thStyle}>Main Risk</th>
                <th style={thStyle}>Risk Level</th>
                <th style={thStyle}>Suggested Action</th>
              </tr>
            </thead>

            <tbody>
              {riskLocations.map((item) => (
                <tr key={item.location}>
                  <td style={tdStyle}>{item.location}</td>
                  <td style={tdStyle}>{item.coordinates}</td>
                  <td style={tdStyle}>{item.mainRisk}</td>
                  <td style={tdStyle}>
                    <span style={getRiskBadgeStyle(item.riskLevel)}>
                      {item.riskLevel}
                    </span>
                  </td>
                  <td style={tdStyle}>{item.action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}

function getRiskBadgeStyle(riskLevel: string): CSSProperties {
  const baseStyle: CSSProperties = {
    padding: "8px 12px",
    borderRadius: "999px",
    fontWeight: "bold",
    display: "inline-block",
    whiteSpace: "nowrap",
  };

  if (riskLevel === "High") {
    return {
      ...baseStyle,
      background: "#fee2e2",
      color: "#991b1b",
    };
  }

  if (riskLevel === "Medium") {
    return {
      ...baseStyle,
      background: "#fef3c7",
      color: "#92400e",
    };
  }

  return {
    ...baseStyle,
    background: "#dcfce7",
    color: "#166534",
  };
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
  margin: "0 auto 26px auto",
  background: "rgba(255,255,255,0.92)",
  borderRadius: "30px",
  padding: "38px",
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
  fontSize: "48px",
  lineHeight: "1.08",
  margin: "18px 0",
};

const descriptionStyle: CSSProperties = {
  color: "#334155",
  fontSize: "17px",
  lineHeight: "1.7",
  maxWidth: "860px",
};

const cardsGridStyle: CSSProperties = {
  maxWidth: "1180px",
  margin: "0 auto 26px auto",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "18px",
};

const riskCardStyle: CSSProperties = {
  background: "rgba(255,255,255,0.94)",
  borderRadius: "24px",
  padding: "22px",
  border: "1px solid #99f6e4",
  boxShadow: "0 14px 32px rgba(15,118,110,0.10)",
};

const cardTopStyle: CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  gap: "12px",
  alignItems: "flex-start",
};

const cardTitleStyle: CSSProperties = {
  color: "#115e59",
  margin: 0,
  fontSize: "20px",
};

const coordinateStyle: CSSProperties = {
  color: "#0f766e",
  fontWeight: "bold",
  margin: "12px 0",
};

const cardTextStyle: CSSProperties = {
  color: "#334155",
  lineHeight: "1.6",
};

const tableCardStyle: CSSProperties = {
  maxWidth: "1180px",
  margin: "0 auto",
  background: "rgba(255,255,255,0.94)",
  borderRadius: "28px",
  padding: "26px",
  boxShadow: "0 18px 42px rgba(15,118,110,0.12)",
  border: "1px solid #99f6e4",
};

const tableHeaderStyle: CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  gap: "16px",
  alignItems: "center",
  marginBottom: "18px",
  flexWrap: "wrap",
};

const tableTitleStyle: CSSProperties = {
  color: "#92400e",
  margin: 0,
  fontSize: "28px",
};

const tableSubtitleStyle: CSSProperties = {
  color: "#64748b",
  margin: "6px 0 0",
};

const assessmentBadgeStyle: CSSProperties = {
  color: "#92400e",
  background: "#fff7ed",
  border: "1px solid #fed7aa",
  padding: "10px 14px",
  borderRadius: "999px",
  fontWeight: "bold",
};

const tableWrapperStyle: CSSProperties = {
  overflowX: "auto",
};

const tableStyle: CSSProperties = {
  width: "100%",
  borderCollapse: "collapse",
};

const thStyle: CSSProperties = {
  background: "#fed7aa",
  color: "#7c2d12",
  padding: "14px",
  textAlign: "left",
  fontSize: "14px",
};

const tdStyle: CSSProperties = {
  padding: "14px",
  borderBottom: "1px solid #e2e8f0",
  color: "#334155",
  verticalAlign: "top",
};
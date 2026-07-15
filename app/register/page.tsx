"use client";

import { useState, type CSSProperties, type FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleRegister(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!fullName || !email || !password) {
      alert("Please fill all fields.");
      return;
    }

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          email,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Registration failed.");
        return;
      }

      alert("Registration successful! Please login.");
      router.push("/login");
    } catch {
      alert("Something went wrong. Please try again.");
    }
  }

  return (
    <main style={pageStyle}>
      <div style={cardStyle}>
        <a href="/" style={logoStyle}>
          <img
            src="/logo.png"
            alt="Marine Turtle Tracker logo"
            style={logoImageStyle}
          />
          <span>Marine Turtle Tracker</span>
        </a>

        <h1 style={titleStyle}>Registration</h1>

        <p style={textStyle}>
          Create an account to use the marine turtle tracking platform.
        </p>

        <form style={formStyle} onSubmit={handleRegister}>
          <label style={labelStyle}>Full Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            style={inputStyle}
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
          />

          <label style={labelStyle}>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            style={inputStyle}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <label style={labelStyle}>Password</label>
          <input
            type="password"
            placeholder="Create a password"
            style={inputStyle}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          <button type="submit" style={buttonStyle}>
            Register
          </button>
        </form>

        <p style={bottomTextStyle}>
          Already have an account?{" "}
          <a href="/login" style={linkStyle}>
            Login here
          </a>
        </p>
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
  maxWidth: "500px",
  background: "rgba(255,255,255,0.94)",
  borderRadius: "30px",
  padding: "36px",
  border: "1px solid #99f6e4",
  boxShadow: "0 20px 50px rgba(15,118,110,0.14)",
};

const logoStyle: CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "12px",
  textDecoration: "none",
  color: "#0f766e",
  fontWeight: "bold",
  fontSize: "22px",
};

const logoImageStyle: CSSProperties = {
  width: "70px",
  height: "70px",
  objectFit: "contain",
};

const titleStyle: CSSProperties = {
  color: "#115e59",
  fontSize: "42px",
  marginBottom: "8px",
};

const textStyle: CSSProperties = {
  color: "#475569",
  lineHeight: "1.6",
  marginBottom: "24px",
};

const formStyle: CSSProperties = {
  display: "grid",
  gap: "12px",
};

const labelStyle: CSSProperties = {
  color: "#334155",
  fontWeight: "bold",
};

const inputStyle: CSSProperties = {
  width: "100%",padding: "14px",
  borderRadius: "14px",
  border: "1px solid #99f6e4",
  fontSize: "15px",
  outline: "none",
};

const buttonStyle: CSSProperties = {
  marginTop: "12px",
  padding: "14px",
  borderRadius: "14px",
  border: "none",
  background: "#0891b2",
  color: "white",
  fontWeight: "bold",
  fontSize: "16px",
  cursor: "pointer",
};

const bottomTextStyle: CSSProperties = {
  color: "#475569",
  marginTop: "20px",
};

const linkStyle: CSSProperties = {
  color: "#0f766e",
  fontWeight: "bold",
};
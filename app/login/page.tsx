"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!email || !password) {
      alert("Please enter email and password.");
      return;
    }

    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.status !== 200) {
      alert(data.message || "Invalid email or password.");
      return;
    }

    alert("Login successful!");
    router.push("/home");
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#ecfeff",
        fontFamily: "Arial, sans-serif",
        padding: "24px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "460px",
          background: "white",
          padding: "36px",
          borderRadius: "28px",
          border: "1px solid #99f6e4",
          boxShadow: "0 20px 50px rgba(15,118,110,0.14)",
        }}
      >
        <a
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            textDecoration: "none",
            color: "#0f766e",
            fontWeight: "bold",
            fontSize: "22px",
          }}
        >
          <img
            src="/logo.png"
            alt="Marine Turtle Tracker logo"
            style={{ width: "70px", height: "70px", objectFit: "contain" }}
          />
          <span>Marine Turtle Tracker</span>
        </a>

        <h1 style={{ color: "#115e59", fontSize: "42px" }}>Login</h1>

        <form onSubmit={handleLogin} style={{ display: "grid", gap: "12px" }}>
          <label style={{ fontWeight: "bold" }}>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            style={{
              padding: "14px",
              borderRadius: "14px",
              border: "1px solid #99f6e4",
              fontSize: "15px",
            }}
          />

          <label style={{ fontWeight: "bold" }}>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            style={{
              padding: "14px",
              borderRadius: "14px",
              border: "1px solid #99f6e4",
              fontSize: "15px",
            }}
          />

          <button
            type="submit"
            style={{
              marginTop: "12px",
              padding: "14px",
              borderRadius: "14px",
              border: "none",
              background: "#0f766e",
              color: "white",
              fontWeight: "bold",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Login
          </button>
        </form>

        <p style={{ color: "#475569", marginTop: "20px" }}>
          Do not have an account?{" "}
          <a href="/register" style={{ color: "#0f766e", fontWeight: "bold" }}>
            Register here
          </a>
        </p>
      </div>
    </main>
  );
}
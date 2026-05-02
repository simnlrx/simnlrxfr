"use client"

import { FormEvent, useEffect, useState } from "react"

interface VisitSummary {
  total: number
  today: number
  last24h: number
  last7d: number
  topPages: Array<{ path: string; count: number }>
  referrers: Array<{ referrer: string; count: number }>
  recent: Array<{ id: string; path: string; referrer: string; timestamp: string }>
}

function Metric({ label, value }: { label: string; value: number }) {
  return (
    <div
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "16px",
        padding: "24px",
      }}
    >
      <p style={{ fontSize: "12px", color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
        {label}
      </p>
      <p style={{ marginTop: "14px", fontSize: "clamp(34px, 5vw, 56px)", fontWeight: 200 }}>{value}</p>
    </div>
  )
}

export default function StatsPage() {
  const [password, setPassword] = useState("")
  const [summary, setSummary] = useState<VisitSummary | null>(null)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(true)

  async function loadSummary() {
    const response = await fetch("/api/analytics/summary", { cache: "no-store" })
    if (!response.ok) {
      setSummary(null)
      setLoading(false)
      return
    }

    const data = (await response.json()) as { summary: VisitSummary }
    setSummary(data.summary)
    setLoading(false)
  }

  useEffect(() => {
    void loadSummary()
  }, [])

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError("")

    const response = await fetch("/api/analytics/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    })

    if (!response.ok) {
      setError("Mot de passe incorrect ou non configuré.")
      return
    }

    setPassword("")
    await loadSummary()
  }

  return (
    <main style={{ minHeight: "100svh", padding: "80px clamp(24px, 8vw, 160px)" }}>
      <div style={{ maxWidth: "960px", margin: "0 auto" }}>
        <p style={{ fontSize: "12px", color: "var(--accent)", textTransform: "uppercase", letterSpacing: "0.16em" }}>
          Analytics
        </p>
        <h1
          style={{
            marginTop: "18px",
            fontSize: "clamp(44px, 7vw, 84px)",
            fontWeight: 200,
            letterSpacing: "-0.04em",
            lineHeight: 1,
          }}
        >
          Visites.
        </h1>

        {!summary && !loading && (
          <form onSubmit={submit} style={{ marginTop: "48px", maxWidth: "420px" }}>
            <label style={{ display: "block", color: "var(--text-secondary)", fontSize: "14px", marginBottom: "12px" }}>
              Mot de passe
            </label>
            <input
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              type="password"
              autoComplete="current-password"
              style={{
                width: "100%",
                border: "1px solid var(--border)",
                borderRadius: "14px",
                background: "var(--surface)",
                color: "var(--text-primary)",
                padding: "14px 16px",
                fontSize: "16px",
              }}
            />
            {error && <p style={{ marginTop: "12px", color: "#ff453a", fontSize: "14px" }}>{error}</p>}
            <button
              type="submit"
              style={{
                marginTop: "18px",
                border: 0,
                borderRadius: "100px",
                background: "var(--accent)",
                color: "#fff",
                padding: "12px 22px",
                fontSize: "15px",
                cursor: "pointer",
              }}
            >
              Entrer
            </button>
          </form>
        )}

        {summary && (
          <div style={{ marginTop: "52px" }}>
            <div className="analytics-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "12px" }}>
              <Metric label="Total" value={summary.total} />
              <Metric label="Aujourd'hui" value={summary.today} />
              <Metric label="24 h" value={summary.last24h} />
              <Metric label="7 jours" value={summary.last7d} />
            </div>

            <div className="analytics-columns" style={{ marginTop: "28px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
              <section>
                <h2 style={{ fontSize: "18px", marginBottom: "14px" }}>Pages</h2>
                {summary.topPages.map((item) => (
                  <p key={item.path} style={{ paddingBlock: "10px", borderBottom: "1px solid var(--border)", color: "var(--text-secondary)" }}>
                    {item.path} <span style={{ float: "right", color: "var(--text-primary)" }}>{item.count}</span>
                  </p>
                ))}
              </section>
              <section>
                <h2 style={{ fontSize: "18px", marginBottom: "14px" }}>Sources</h2>
                {summary.referrers.map((item) => (
                  <p key={item.referrer} style={{ paddingBlock: "10px", borderBottom: "1px solid var(--border)", color: "var(--text-secondary)" }}>
                    {item.referrer} <span style={{ float: "right", color: "var(--text-primary)" }}>{item.count}</span>
                  </p>
                ))}
              </section>
            </div>

            <section style={{ marginTop: "32px" }}>
              <h2 style={{ fontSize: "18px", marginBottom: "14px" }}>Dernières visites</h2>
              {summary.recent.map((visit) => (
                <p key={visit.id} style={{ paddingBlock: "10px", borderBottom: "1px solid var(--border)", color: "var(--text-secondary)" }}>
                  {new Date(visit.timestamp).toLocaleString("fr-FR")} · {visit.path}
                </p>
              ))}
            </section>
          </div>
        )}
      </div>
    </main>
  )
}
